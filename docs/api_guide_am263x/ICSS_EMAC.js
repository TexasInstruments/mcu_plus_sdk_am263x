var ICSS_EMAC =
[
    [ "Introduction", "ICSS_EMAC.html#autotoc_md1582", null ],
    [ "Features Supported", "ICSS_EMAC.html#autotoc_md1583", null ],
    [ "SysConfig Features", "ICSS_EMAC.html#ICSS_EMAC_SYSCONFIG_FEATURES", null ],
    [ "Features not supported", "ICSS_EMAC.html#autotoc_md1584", null ],
    [ "Terms and Abbreviations", "ICSS_EMAC.html#autotoc_md1585", null ],
    [ "ICSS-EMAC Design", "ICSS_EMAC.html#autotoc_md1586", null ],
    [ "ICSS-EMAC Queue Management Design", "ICSS_EMAC.html#autotoc_md1587", null ],
    [ "Usage", "ICSS_EMAC.html#autotoc_md1588", [
      [ "Enable ICSS-EMAC in SysConfig", "ICSS_EMAC.html#autotoc_md1589", null ],
      [ "Update linker command file", "ICSS_EMAC.html#autotoc_md1590", null ],
      [ "Update MPU for the CPU", "ICSS_EMAC.html#autotoc_md1591", null ],
      [ "Including the header file", "ICSS_EMAC.html#autotoc_md1592", null ],
      [ "Initializing the Handle", "ICSS_EMAC.html#autotoc_md1593", null ],
      [ "Sending a Packet", "ICSS_EMAC.html#autotoc_md1594", null ],
      [ "Receiving a Packet", "ICSS_EMAC.html#autotoc_md1595", null ],
      [ "IOCTL", "ICSS_EMAC.html#autotoc_md1596", null ]
    ] ],
    [ "Dependencies", "ICSS_EMAC.html#autotoc_md1597", null ],
    [ "Debug Guide", "ICSS_EMAC.html#autotoc_md1598", null ],
    [ "API", "ICSS_EMAC.html#autotoc_md1599", null ],
    [ "Dual EMAC and Switch Firmwares", "ICSS_EMAC.html#autotoc_md1600", null ],
    [ "ICSS-EMAC Design", "ICSS_EMAC_DESIGN.html", [
      [ "Modes of Operation", "ICSS_EMAC_DESIGN.html#autotoc_md1608", null ],
      [ "Ports in ICSS-EMAC Context", "ICSS_EMAC_DESIGN.html#autotoc_md1609", null ],
      [ "Memory Map", "ICSS_EMAC_DESIGN.html#autotoc_md1610", [
        [ "Queue Buffers", "ICSS_EMAC_DESIGN.html#autotoc_md1611", null ],
        [ "Shared Data RAM", "ICSS_EMAC_DESIGN.html#autotoc_md1612", null ],
        [ "PRU0 Data RAM", "ICSS_EMAC_DESIGN.html#autotoc_md1613", null ],
        [ "PRU1 Data RAM", "ICSS_EMAC_DESIGN.html#autotoc_md1614", null ]
      ] ],
      [ "Quality of Service and Queues", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_QOS", null ],
      [ "Data Path", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_DATA_PATH", [
        [ "Rx Data Path", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_DATA_PATH_RX", null ],
        [ "Tx Data Path", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_DATA_PATH_TX", null ],
        [ "Forwarding Rules", "ICSS_EMAC_DESIGN.html#autotoc_md1615", null ]
      ] ],
      [ "OS Components", "ICSS_EMAC_DESIGN.html#autotoc_md1616", [
        [ "Interrupts", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_INTERRUPTS", null ],
        [ "Tasks", "ICSS_EMAC_DESIGN.html#autotoc_md1617", null ],
        [ "Semaphores", "ICSS_EMAC_DESIGN.html#autotoc_md1618", null ]
      ] ],
      [ "Interrupt Pacing", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_INTERRUPT_PACING", null ],
      [ "Half Duplex Support", "ICSS_EMAC_DESIGN.html#autotoc_md1619", null ],
      [ "Learning/FDB", "ICSS_EMAC_DESIGN.html#autotoc_md1620", [
        [ "Usage", "ICSS_EMAC_DESIGN.html#autotoc_md1621", null ]
      ] ],
      [ "Storm Prevention", "ICSS_EMAC_DESIGN.html#autotoc_md1622", [
        [ "Usage", "ICSS_EMAC_DESIGN.html#autotoc_md1623", null ]
      ] ],
      [ "Statistics", "ICSS_EMAC_DESIGN.html#ICSS_EMAC_DESIGN_STATISTICS", [
        [ "Usage", "ICSS_EMAC_DESIGN.html#autotoc_md1624", null ]
      ] ]
    ] ],
    [ "ICSS EMAC Queue Management Design", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html", [
      [ "Overview", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1625", null ],
      [ "Ports in ICSS EMAC", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1626", null ],
      [ "Port-Based Queue Organization", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1627", [
        [ "Queue Distribution", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1628", null ],
        [ "Default Queue Sizes", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1629", null ]
      ] ],
      [ "Introduction to Queue Management Units", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1630", [
        [ "Buffer", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1631", null ],
        [ "Buffer Descriptor (BD)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1632", null ],
        [ "Queue", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1633", null ],
        [ "Queue Descriptor (QD)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1634", null ]
      ] ],
      [ "Detailed Component Structure and Relationships", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1635", null ],
      [ "Collision Queue", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1636", [
        [ "What is Queue Contention?", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1637", null ],
        [ "Primary-Secondary Arbitration System", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1638", null ],
        [ "How the Arbitration Works", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1639", null ],
        [ "Collision Queue Mechanism", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1640", null ]
      ] ],
      [ "Reception Flow Example", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1641", [
        [ "Initial State (Empty Queues)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1642", null ],
        [ "Packet Arrives at PRU (Firmware Receives)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1643", null ],
        [ "Firmware (Producer) Actions", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1644", null ],
        [ "Host (Consumer) Actions", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1645", null ]
      ] ],
      [ "Transmission Flow Example", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1646", [
        [ "Initial State (Empty Transmit Queue)", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1647", null ],
        [ "Application Calls ICSS_EMAC_txPacket", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1648", null ],
        [ "Driver (Producer) Actions in ICSS_EMAC_txPacketEnqueue", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1649", null ],
        [ "Firmware (Consumer) Actions", "ICSS_EMAC_QUEUE_MANAGEMENT_DESIGN.html#autotoc_md1650", null ]
      ] ]
    ] ],
    [ "ICSS-EMAC Debug Guide", "ICSS_EMAC_DEBUG_GUIDE.html", [
      [ "Assumption", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1601", null ],
      [ "Scope", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1602", null ],
      [ "Common Debugging Tasks", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1603", [
        [ "Loading and running on CCS", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1604", null ],
        [ "Checking Link Status", "ICSS_EMAC_DEBUG_GUIDE.html#ICSS_EMAC_DEBUG_GUIDE_CHECKING_LINK_STATUS", null ],
        [ "Checking if Receive is working", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1605", null ],
        [ "Checking if Transmit is working", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1606", null ],
        [ "Checking Statistics", "ICSS_EMAC_DEBUG_GUIDE.html#ICSS_EMAC_DEBUG_GUIDE_CHECKING_STATISTICS", null ]
      ] ],
      [ "Accessing Memory", "ICSS_EMAC_DEBUG_GUIDE.html#ICSS_EMAC_DEBUG_GUIDE_ACCESSING_MEMORY", null ],
      [ "Using ROV to Debug RTOS", "ICSS_EMAC_DEBUG_GUIDE.html#autotoc_md1607", null ]
    ] ],
    [ "Dual EMAC and Switch", "DUAL_EMAC_AND_SWITCH.html", [
      [ "Introduction", "DUAL_EMAC_AND_SWITCH.html#autotoc_md1651", null ],
      [ "DUAL_EMAC", "DUAL_EMAC_AND_SWITCH.html#autotoc_md1652", null ],
      [ "SWITCH", "DUAL_EMAC_AND_SWITCH.html#autotoc_md1653", null ]
    ] ]
];