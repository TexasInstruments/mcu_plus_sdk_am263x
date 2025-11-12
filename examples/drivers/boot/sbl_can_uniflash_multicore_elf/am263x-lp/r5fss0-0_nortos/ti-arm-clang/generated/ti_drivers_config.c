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
 * QSPI
 */
#include <drivers/qspi/v0/lld/edma/qspi_edma_lld.h>
#include <drivers/qspi/v0/lld/qspi_lld.h>
QSPI_EdmaParams gqspiEdmaParam;

/* QSPI attributes */
static QSPI_Attrs gQspiAttrs[CONFIG_QSPI_NUM_INSTANCES] =
{
    {
        .baseAddr             = CSL_QSPI0_U_BASE,
        .memMapBaseAddr       = CSL_EXT_FLASH0_U_BASE,
        .inputClkFreq         = 80000000U,
        .intrNum              = 54U,
        .intrEnable           = FALSE,
        .wordIntr             = NULL,
        .frameIntr            = NULL,
        .dmaEnable            = TRUE,
        .intrPriority         = 4U,
        .rxLines              = QSPI_RX_LINES_QUAD,
        .chipSelect           = QSPI_CS0,
        .csPol                = QSPI_CS_POL_ACTIVE_LOW,
        .dataDelay            = QSPI_DATA_DELAY_0,
        .frmFmt               = QSPI_FF_POL0_PHA0,
        .wrdLen               = 8,
        .baudRateDiv          = 0,
    },
};
/* QSPI objects - initialized by the driver */
static QSPI_Object gQspiObjects[CONFIG_QSPI_NUM_INSTANCES];

/* QSPI driver configuration */
QSPI_Config gQspiConfig[CONFIG_QSPI_NUM_INSTANCES] =
{
    {
        .attrs = &gQspiAttrs[CONFIG_QSPI0],
        .object = &gQspiObjects[CONFIG_QSPI0],
    },
};

uint32_t gQspiConfigNum = CONFIG_QSPI_NUM_INSTANCES;

/*
 * EDMA
 */
/* EDMA atrributes */
static EDMA_Attrs gEdmaAttrs[CONFIG_EDMA_NUM_INSTANCES] =
{
    {

        .baseAddr           = CSL_TPCC0_U_BASE,
        .compIntrNumber     = CSLR_R5FSS0_CORE0_INTR_TPCC0_INT_0,
        .intrPriority       = 15U,
        .errIntrNumber      = CSLR_R5FSS0_CORE0_INTR_TPCC0_ERRAGGR,
        .errIntrPriority    = 15U,
        .intrAggEnableAddr  = CSL_MSS_CTRL_U_BASE + CSL_MSS_CTRL_TPCC0_INTAGG_MASK,
        .intrAggEnableMask  = 0x1FF & (~(2U << 0)),
        .intrAggStatusAddr  = CSL_MSS_CTRL_U_BASE + CSL_MSS_CTRL_TPCC0_INTAGG_STATUS,
        .intrAggClearMask   = (2U << 0),
        .errIntrAggEnableAddr  = CSL_MSS_CTRL_U_BASE + CSL_MSS_CTRL_TPCC0_ERRAGG_MASK,
        .errIntrAggEnableMask  = 0xFFFFFFFF & (~(0x707001F)),
        .errIntrAggStatusAddr  = CSL_MSS_CTRL_U_BASE + CSL_MSS_CTRL_TPCC0_ERRAGG_STATUS,
        .errIntrAggRawStatusAddr  = CSL_MSS_CTRL_U_BASE + CSL_MSS_CTRL_TPCC0_ERRAGG_STATUS_RAW,
        .initPrms           =
        {
            .regionId     = 0,
            .queNum       = 0,
            .initParamSet = FALSE,
            .ownResource    =
            {
                .qdmaCh      = 0x03U,
                .dmaCh[0]    = 0xFFFFFFFFU,
                .dmaCh[1]    = 0x000000FFU,
                .tcc[0]      = 0xFFFFFFFFU,
                .tcc[1]      = 0x000000FFU,
                .paramSet[0] = 0xFFFFFFFFU,
                .paramSet[1] = 0xFFFFFFFFU,
                .paramSet[2] = 0xFFFFFFFFU,
                .paramSet[3] = 0xFFFFFFFFU,
                .paramSet[4] = 0xFFFFFFFFU,
                .paramSet[5] = 0xFFFFFFFFU,
                .paramSet[6] = 0xFFFFFFFFU,
                .paramSet[7] = 0x000007FFU,
            },
            .reservedDmaCh[0]    = 0x00000000U,
            .reservedDmaCh[1]    = 0x00000000U,
        },
    },
};

/* EDMA objects - initialized by the driver */
static EDMA_Object gEdmaObjects[CONFIG_EDMA_NUM_INSTANCES];
/* EDMA driver configuration */
EDMA_Config gEdmaConfig[CONFIG_EDMA_NUM_INSTANCES] =
{
    {
        &gEdmaAttrs[CONFIG_EDMA0],
        &gEdmaObjects[CONFIG_EDMA0],
    },
};

uint32_t gEdmaConfigNum = CONFIG_EDMA_NUM_INSTANCES;


/*
 * BOOTLOADER
 */
/* Include ti_board_config.h for flash config macros */
#include "ti_board_config.h"

/* Bootloader boot media specific arguments */
Bootloader_FlashArgs gBootloader0Args =
{
    .flashIndex     = CONFIG_FLASH0,
    .curOffset      = 0,
    .appImageOffset = 0x00080000,
};

/* Configuration option for lockstep or standalone */
Bootloader_socCoreOpModeConfig operatingMode=
{
    BOOTLOADER_OPMODE_LOCKSTEP,
    BOOTLOADER_OPMODE_LOCKSTEP,
};


/* Bootloader driver configuration */
Bootloader_Config gBootloaderConfig[CONFIG_BOOTLOADER_NUM_INSTANCES] =
{
    {
        &gBootloaderFlashFxns,
        &gBootloader0Args,
        BOOTLOADER_MEDIA_FLASH,
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
 * GPIO
 */

/* ----------- GPIO Direction, Trigger, Interrupt initialization ----------- */

void GPIO_init()
{
    uint32_t    baseAddr;

    /* Instance 0 */
    /* Get address after translation translate */
    baseAddr = (uint32_t) AddrTranslateP_getLocalAddr(CONFIG_GPIO0_BASE_ADDR);

    GPIO_setDirMode(baseAddr, CONFIG_GPIO0_PIN, CONFIG_GPIO0_DIR);
}


/* ----------- GPIO Interrupt de-initialization ----------- */
void GPIO_deinit()
{

}

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
 * MCAN
 */
extern MCAN_BitTimingParams gMcanBitTimingDefaultParams;


/* MCAN Default Bit timing Parameters */
MCAN_BitTimingParams gMcanBitTimingDefaultParams =
{
    .nomRatePrescalar   = 0x3U,
    .nomTimeSeg1        = 0xFU,
    .nomTimeSeg2        = 0x2U,
    .nomSynchJumpWidth  = 0x0U,
    .dataRatePrescalar  = 0x1U,
    .dataTimeSeg1       = 0x5U,
    .dataTimeSeg2       = 0x0U,
    .dataSynchJumpWidth = 0x0U,
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
    QSPI_init();
    EDMA_init();
    GPIO_init();
    HsmClient_config();

    Drivers_uartInit();
}

void System_deinit(void)
{
    QSPI_deinit();
    EDMA_deinit();
    GPIO_deinit();
    HsmClient_unRegister();

    UART_deinit();
    PowerClock_deinit();

    Dpl_deinit();
}
