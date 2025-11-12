/*
 *  Copyright (C) 2021 Texas Instruments Incorporated
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions
 *  are met:
 *
 *    Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 *    Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the
 *    distribution.
 *
 *    Neither the name of Texas Instruments Incorporated nor the names of
 *    its contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 *  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 *  LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 *  A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 *  OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 *  SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 *  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 *  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 *  THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 *  OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
/*
 * Auto generated file
 */

#include "ti_drivers_config.h"


/*
 * BOOTLOADER
 */

/* Bootloader boot media specific arguments */
Bootloader_MemArgs gBootloader0Args =
{
    .curOffset        = 0,
    .appImageBaseAddr = 0x00000000,
};

/* Configuration option for lockstep or standalone */
Bootloader_socCoreOpModeConfig operatingMode=
{
    BOOTLOADER_OPMODE_STANDALONE,
    BOOTLOADER_OPMODE_STANDALONE,
};


/* Bootloader driver configuration */
Bootloader_Config gBootloaderConfig[CONFIG_BOOTLOADER_NUM_INSTANCES] =
{
    {
        &gBootloaderMemFxns,
        &gBootloader0Args,
        BOOTLOADER_MEDIA_MEM,
        0,
        0,
        NULL,
        .socCoreOpMode= (void *)&operatingMode,
        .isAppimageSigned = TRUE,
        .disableAppImageAuth = FALSE,
        .initICSSCores = FALSE,
        0,
    },
};

uint32_t gBootloaderConfigNum = CONFIG_BOOTLOADER_NUM_INSTANCES;

SecureBoot_Stream_t gSecureBootStreamArray[MAX_SECURE_BOOT_STREAM_LENGTH];

/*
 * HSM Client
 */

/* memory assigned for each R5x <-> HSM channel */
uint8_t gQueue_HsmToSecureHost[SIPC_NUM_R5_CORES][SIPC_QUEUE_LENGTH*SIPC_MSG_SIZE] __attribute__((aligned(8),section(".bss.sipc_hsm_queue_mem")));
uint8_t gQueue_SecureHostToHsm[SIPC_NUM_R5_CORES][SIPC_QUEUE_LENGTH*SIPC_MSG_SIZE] __attribute__((aligned(8),section(".bss.sipc_secure_host_queue_mem")));
HsmClient_t gHSMClient ;

/* Queue used to store HSM client messages that need to be dispatched via SIPC */
HsmMsg_t gHsmClientMsgQueue[HSM_CLIENT_MSG_QUEUE_SIZE];

void HsmClient_config(void)
{
    SIPC_Params sipcParams;
    int32_t status;

    /* initialize parameters to default */
    SIPC_Params_init(&sipcParams);

    sipcParams.ipcQueue_eleSize_inBytes = SIPC_MSG_SIZE;
    sipcParams.ipcQueue_length = SIPC_QUEUE_LENGTH ;
    /* list the cores that will do SIPC communication with this core
    * Make sure to NOT list 'self' core in the list below
    */
    sipcParams.numCores = 1;
    sipcParams.coreIdList[0] = CORE_INDEX_HSM;

    /* specify the priority of SIPC Notify interrupt */
    sipcParams.intrPriority = 7U;


    /* This is HSM -> R5F queue */
    sipcParams.tx_SipcQueues[CORE_INDEX_HSM] = (uintptr_t)gQueue_SecureHostToHsm[0] ;
    sipcParams.rx_SipcQueues[CORE_INDEX_HSM] = (uintptr_t)gQueue_HsmToSecureHost[0] ;
    sipcParams.secHostCoreId[CORE_INDEX_SEC_MASTER_0] = CORE_ID_R5FSS0_0;

    /* initialize the HsmClient module */
    status = HsmClient_init(&sipcParams);
    HsmClient_SecureBootQueueInit(HSM_CLIENT_MSG_QUEUE_SIZE);
    DebugP_assert(status==SystemP_SUCCESS);

    /* register a hsm client to detect bootnotify message and keyring import from HSM */
    status = HsmClient_register(&gHSMClient, HSM_BOOT_NOTIFY_CLIENT_ID);
    DebugP_assert(status==SystemP_SUCCESS);
}

void HsmClient_unRegister(void)
{
     /* Unregister bootnotify client */
    HsmClient_unregister(&gHSMClient, HSM_BOOT_NOTIFY_CLIENT_ID);
}


/*
 * SDL Interface functions for PBIST modules
 */

static HwiP_Object gSDLHwiObject;

static pSDL_DPL_HwipHandle SDL_registerInterrupt(SDL_DPL_HwipParams *pParams)
{
    HwiP_Params hwipParams;
    HwiP_Params_init(&hwipParams);

    hwipParams.args = (void *)pParams->callbackArg;
    hwipParams.intNum = pParams->intNum;
    hwipParams.callback = pParams->callback;

    HwiP_construct(&gSDLHwiObject, &hwipParams);

    return &gSDLHwiObject;
}

static int32_t SDL_deregisterInterrupt(pSDL_DPL_HwipHandle handle)
{
    HwiP_destruct(handle);
    return SDL_PASS;
}

static int32_t SDL_enableInterrupt(uint32_t intNum)
{
    HwiP_enableInt(intNum);
    return SDL_PASS;
}

static int32_t SDL_disableInterrupt(uint32_t intNum)
{
    HwiP_disableInt(intNum);
    return SDL_PASS;
}

static void* SDL_addrTranslate(uint64_t addr, uint32_t size)
{
    uint32_t transAddr = (uint32_t)(-1);

    transAddr = (uint32_t)AddrTranslateP_getLocalAddr(addr);

    return (void *)transAddr;
}


static SDL_DPL_Interface dpl_interface =
{
    .enableInterrupt = (pSDL_DPL_InterruptFunction) SDL_enableInterrupt,
    .disableInterrupt = (pSDL_DPL_InterruptFunction) SDL_disableInterrupt,
    .registerInterrupt = (pSDL_DPL_RegisterFunction) SDL_registerInterrupt,
    .deregisterInterrupt = (pSDL_DPL_DeregisterFunction) SDL_deregisterInterrupt,
    .delay = (pSDL_DPL_DelayFunction) ClockP_sleep,
    .addrTranslate = (pSDL_DPL_AddrTranslateFunction) SDL_addrTranslate
};
/*
 * UART
 */

/* UART atrributes */
static UART_Attrs gUartAttrs[CONFIG_UART_NUM_INSTANCES] =
{
        {
            .baseAddr           = CSL_UART0_U_BASE,
            .inputClkFreq       = 48000000U,
        },
};
/* UART objects - initialized by the driver */
static UART_Object gUartObjects[CONFIG_UART_NUM_INSTANCES];
/* UART driver configuration */
UART_Config gUartConfig[CONFIG_UART_NUM_INSTANCES] =
{
        {
            &gUartAttrs[CONFIG_UART0],
            &gUartObjects[CONFIG_UART0],
        },
};

uint32_t gUartConfigNum = CONFIG_UART_NUM_INSTANCES;

#include <drivers/uart/v0/lld/dma/uart_dma.h>
UART_DmaHandle gUartDmaHandle[] =
{
};

uint32_t gUartDmaConfigNum = CONFIG_UART_NUM_DMA_INSTANCES;

void Drivers_uartInit(void)
{
    UART_init();
}

/*
 * MCU_LBIST
 */

uint32_t gMcuLbistTestStatus = 0U;

void SDL_lbist_selftest(void)
{
}

void Pinmux_init(void);
void PowerClock_init(void);
void PowerClock_deinit(void);
/*
 * Common Functions
 */
void System_init(void)
{
    /* DPL init sets up address transalation unit, on some CPUs this is needed
     * to access SCICLIENT services, hence this needs to happen first
     */
    Dpl_init();

    
    PowerClock_init();
    /* Now we can do pinmux */
    Pinmux_init();
    /* finally we initialize all peripheral drivers */
    HsmClient_config();

    /* PBIST */

    static uint32_t gMcuPbistTestStatus = 0U;

    if(gMcuPbistTestStatus == 0)
    {
        int32_t status = SystemP_SUCCESS;

        bool PBISTResult;
        gMcuPbistTestStatus = 1;

        /* Initialize SDL DPL */
        status = SDL_DPL_init(&dpl_interface);
        DebugP_assert(status == SDL_PASS);

        CacheP_disable(CacheP_TYPE_L1P | CacheP_TYPE_L1D);

        /* Start MCU PBIST */
        status = SDL_PBIST_selfTest(SDL_PBIST_INST_TOP,SDL_PBIST_TEST,SDL_BIST_MAX_TIMEOUT_VALUE,&PBISTResult);
        if(SystemP_FAILURE == status)
        {
            DebugP_logError(" PBIST Run test Failed...");
        }

        status = SDL_PBIST_selfTest(SDL_PBIST_INST_TOP,SDL_PBIST_NEG_TEST,SDL_BIST_MAX_TIMEOUT_VALUE,&PBISTResult);
        CacheP_enable(CacheP_TYPE_L1P | CacheP_TYPE_L1D);

        if(SystemP_FAILURE == status)
        {
            DebugP_logError(" PBIST Error test Failed...");
        }
    }


    Drivers_uartInit();
}

void System_deinit(void)
{
    HsmClient_unRegister();

    UART_deinit();
    PowerClock_deinit();

    Dpl_deinit();
}
