var ICSS_EMAC =
[
    [ "Introduction", "ICSS_EMAC.html#autotoc_md1625", null ],
    [ "Features Supported", "ICSS_EMAC.html#autotoc_md1626", null ],
    [ "SysConfig Features", "ICSS_EMAC.html#ICSS_EMAC_SYSCONFIG_FEATURES", null ],
    [ "Features not supported", "ICSS_EMAC.html#autotoc_md1627", null ],
    [ "Terms and Abbreviations", "ICSS_EMAC.html#autotoc_md1628", null ],
    [ "ICSS-EMAC Design", "ICSS_EMAC.html#autotoc_md1629", null ],
    [ "ICSS-EMAC Queue Management Design", "ICSS_EMAC.html#autotoc_md1630", null ],
    [ "Usage", "ICSS_EMAC.html#autotoc_md1631", [
      [ "Enable ICSS-EMAC in SysConfig", "ICSS_EMAC.html#autotoc_md1632", null ],
      [ "Update linker command file", "ICSS_EMAC.html#autotoc_md1633", null ],
      [ "Update MPU for the CPU", "ICSS_EMAC.html#autotoc_md1634", null ],
      [ "Including the header file", "ICSS_EMAC.html#autotoc_md1635", null ],
      [ "Initializing the Handle", "ICSS_EMAC.html#autotoc_md1636", null ],
      [ "Sending a Packet", "ICSS_EMAC.html#autotoc_md1637", null ],
      [ "Receiving a Packet", "ICSS_EMAC.html#autotoc_md1638", null ],
      [ "IOCTL", "ICSS_EMAC.html#autotoc_md1639", null ]
    ] ],
    [ "Dependencies", "ICSS_EMAC.html#autotoc_md1640", null ],
    [ "Debug Guide", "ICSS_EMAC.html#autotoc_md1641", null ],
    [ "API", "ICSS_EMAC.html#autotoc_md1642", null ],
    [ "Dual EMAC and Switch Firmwares", "ICSS_EMAC.html#autotoc_md1643", null ],
    [ "ICSS-EMAC Design", "ICSS_EMAC_DESIGN.html", [
      [ "Modes of Operation", "ICSS_EMAC_DESIGN.html#autotoc_md1651", null ],
      [ "Ports in ICSS-EMAC Context", "ICSS_EMAC_DESIGN.html#autotoc_md1652", null ],
      [ "Memory Map", "ICSS_EMAC_DESIGN.html#autotoc_md1653", [
        [ "Queue Buffers", "ICSS_EMAC_DESIGN.html#autotoc_md1654", null ],
        [ "Shared Data RAM", "ICSS_EMAC_DESIGN.html#autotoc_md1655", null ],
        [ "PRU0 Data RAM", "ICSS_EMAC_DESIGN.html#autotoc_md1656", null ],
        [ "PRU1 Data RAM", "ICSS_EMAC_DESIGN.html#autotoc_md1657", null ]
      ] ],
      [ "Quality of Service and Queues", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_QOS", null ],
      [ "Data Path", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_DATA_PATH", [
        [ "Rx Data Path", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_DATA_PATH_RX", null ],
        [ "Tx Data Path", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_DATA_PATH_TX", null ],
        [ "Forwarding Rules", "ICSS_EMAC_DESIGN.html#autotoc_md1658", null ]
      ] ],
      [ "OS Components", "ICSS_EMAC_DESIGN.html#autotoc_md1659", [
        [ "Interrupts", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_INTERRUPTS", null ],
        [ "Tasks", "ICSS_EMAC_DESIGN.html#autotoc_md1660", null ],
        [ "Semaphores", "ICSS_EMAC_DESIGN.html#autotoc_md1661", null ]
      ] ],
      [ "Interrupt Pacing", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_INTERRUPT_PACING", null ],
      [ "Half Duplex Support", "ICSS_EMAC_DESIGN.html#autotoc_md1662", null ],
      [ "Learning/FDB", "ICSS_EMAC_DESIGN.html#autotoc_md1663", [
        [ "Usage", "ICSS_EMAC_DESIGN.html#autotoc_md1664", null ]
      ] ],
      [ "Storm Prevention", "ICSS_EMAC_DESIGN.html#autotoc_md1665", [
        [ "Usage", "ICSS_EMAC_DESIGN.html#autotoc_md1666", null ]
      ] ],
      [ "Statistics", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_STATISTICS", [
        [ "Usage", "ICSS_EMAC_DESIGN.html#autotoc_md1667", null ]
      ] ]
    ] ],
    [ "ICSS EMAC Queue Management Design", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html", [
      [ "Overview", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1668", null ],
      [ "Ports in ICSS EMAC", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1669", null ],
      [ "Port-Based Queue Organization", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1670", [
        [ "Queue Distribution", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1671", null ],
        [ "Default Queue Sizes", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1672", null ]
      ] ],
      [ "Introduction to Queue Management Units", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1673", [
        [ "Buffer", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1674", null ],
        [ "Buffer Descriptor (BD)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1675", null ],
        [ "Queue", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1676", null ],
        [ "Queue Descriptor (QD)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1677", null ]
      ] ],
      [ "Detailed Component Structure and Relationships", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1678", null ],
      [ "Collision Queue", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1679", [
        [ "What is Queue Contention?", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1680", null ],
        [ "Primary-Secondary Arbitration System", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1681", null ],
        [ "How the Arbitration Works", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1682", null ],
        [ "Collision Queue Mechanism", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1683", null ]
      ] ],
      [ "Reception Flow Example", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1684", [
        [ "Initial State (Empty Queues)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1685", null ],
        [ "Packet Arrives at PRU (Firmware Receives)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1686", null ],
        [ "Firmware (Producer) Actions", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1687", null ],
        [ "Host (Consumer) Actions", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1688", null ]
      ] ],
      [ "Transmission Flow Example", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1689", [
        [ "Initial State (Empty Transmit Queue)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1690", null ],
        [ "Application Calls ICSS_EMAC_txPacket", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1691", null ],
        [ "Driver (Producer) Actions in ICSS_EMAC_txPacketEnqueue", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1692", null ],
        [ "Firmware (Consumer) Actions", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1693", null ]
      ] ]
    ] ],
    [ "ICSS-EMAC Debug Guide", "ICSS_EMAC_DEBUG_GUIDE.html", [
      [ "Assumption", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1644", null ],
      [ "Scope", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1645", null ],
      [ "Common Debugging Tasks", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1646", [
        [ "Loading and running on CCS", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1647", null ],
        [ "Checking Link Status", "ICSS_EMAC_DEBUG_GUIDE.html#ICSS_EMAC_DEBUG_GUIDE_CHECKING_LINK_STATUS", null ],
        [ "Checking if Receive is working", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1648", null ],
        [ "Checking if Transmit is working", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1649", null ],
        [ "Checking Statistics", "ICSS_EMAC_DEBUG_GUIDE.html#ICSS_EMAC_DEBUG_GUIDE_CHECKING_STATISTICS", null ]
      ] ],
      [ "Accessing Memory", "ICSS_EMAC_DEBUG_GUIDE.html#ICSS_EMAC_DEBUG_GUIDE_ACCESSING_MEMORY", null ],
      [ "Using ROV to Debug RTOS", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1650", null ]
    ] ],
    [ "Dual EMAC and Switch", "DUAL_EMAC_AND_SWITCH.html", [
      [ "Introduction", "DUAL_EMAC_AND_SWITCH.html#autotoc_md1694", null ],
      [ "DUAL_EMAC", "DUAL_EMAC_AND_SWITCH.html#autotoc_md1695", null ],
      [ "SWITCH", "DUAL_EMAC_AND_SWITCH.html#autotoc_md1696", null ]
    ] ]
];