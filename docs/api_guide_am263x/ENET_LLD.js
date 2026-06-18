var ENET_LLD =
[
    [ "Enet LLD Introduction", "enetlld_top.html", [
      [ "Introduction", "enetlld_top.html#enetlld_intro", null ],
      [ "Application Programming Interface", "enetlld_top.html#enetlld_api_overview", [
        [ "Control path API", "enetlld_top.html#autotoc_md1540", null ],
        [ "Data path (DMA) API", "enetlld_top.html#autotoc_md1541", null ],
        [ "Life cycle of an Enet LLD based application", "enetlld_top.html#autotoc_md1542", null ]
      ] ],
      [ "Enet Peripherals", "enetlld_top.html#enetlld_enetpers", [
        [ "CPSW Peripheral", "enetlld_top.html#enetper_cpsw", null ]
      ] ],
      [ "Document Revision History", "enetlld_top.html#enetlld_hist", null ]
    ] ],
    [ "Enet LLD IOCTL interface", "enet_ioctl_interface.html", [
      [ "Introduction", "enet_ioctl_interface.html#enet_ioctl_intro", [
        [ "Using the IOCTL interface", "enet_ioctl_interface.html#using_enet_ioctl", null ],
        [ "Synchronous and Asynchronous IOCTLs", "enet_ioctl_interface.html#enet_async_ioctl", null ]
      ] ]
    ] ],
    [ "Ethernet PHY Link Configuration", "enetphy_link_config_top.html", [
      [ "Link Configuration Guidelines", "enetphy_link_config_top.html#enetphy_link_config_guidelines", [
        [ "Manual Mode", "enetphy_link_config_top.html#enetphy_link_manual", [
          [ "Half-Duplex Mode", "enetphy_link_config_top.html#enetphy_link_manual_half_duplex", null ],
          [ "Full-Duplex Mode", "enetphy_link_config_top.html#enetphy_link_manual_full_duplex", null ]
        ] ],
        [ "Auto-Negotiation Mode", "enetphy_link_config_top.html#enetphy_link_autoneg", null ],
        [ "Strapping", "enetphy_link_config_top.html#enetphy_link_strapping", null ]
      ] ]
    ] ],
    [ "Ethernet PHY Integration Guide", "phy_integration_guide_top.html", "phy_integration_guide_top" ],
    [ "MAC2MAC support", "enet_mac2mac_top.html", [
      [ "Introduction", "enet_mac2mac_top.html#mac2mac_intro", null ],
      [ "Enable MAC2MAC through Sysconfig", "enet_mac2mac_top.html#mac2mac_syscfg_support", null ]
    ] ],
    [ "Enet Integration Guide", "enet_integration_guide_top.html", [
      [ "Introduction", "enet_integration_guide_top.html#cpsw_integration_guide_intro", null ],
      [ "Getting Familiar with Enet LLD APIs", "enet_integration_guide_top.html#GettingFamiliarWithAPIs", [
        [ "IOCTL Interface", "enet_integration_guide_top.html#IOCTL_description", null ]
      ] ],
      [ "Integrating Enet LLD into User's Application", "enet_integration_guide_top.html#enet_integration_in_app", [
        [ "Init Sequence", "enet_integration_guide_top.html#enet_init_sequence", null ],
        [ "Peripheral Open Sequence", "enet_integration_guide_top.html#enet_open_sequence", null ],
        [ "Port Open Sequence", "enet_integration_guide_top.html#enet_openport_sequence", [
          [ "MAC-PHY link", "enet_integration_guide_top.html#autotoc_md1543", null ],
          [ "MAC-to-MAC link", "enet_integration_guide_top.html#autotoc_md1544", null ]
        ] ],
        [ "Packet Send/Receive Sequence", "enet_integration_guide_top.html#enet_pktrxtx_sequence", null ],
        [ "IOCTL Sequence", "enet_integration_guide_top.html#enet_ioctl_sequence", null ],
        [ "Port Close Sequence", "enet_integration_guide_top.html#enet_closeport_sequence", null ],
        [ "Peripheral Close Sequence", "enet_integration_guide_top.html#enet_close_sequence", null ],
        [ "Deinit Sequence", "enet_integration_guide_top.html#enet_deinit_sequence", null ],
        [ "Peripheral-specific", "enet_integration_guide_top.html#enetper_specific_handling", null ]
      ] ]
    ] ],
    [ "MDIO Manual Mode Enablement", "enetmdio_manualmode.html", [
      [ "Workaround for details errata i2329-MDIO interface corruption and its impact:", "enetmdio_manualmode.html#autotoc_md1546", null ],
      [ "Limitations", "enetmdio_manualmode.html#autotoc_md1547", null ],
      [ "Not supported MDIO IOCTL APIs in MDIO Manual mode", "enetmdio_manualmode.html#autotoc_md1548", null ]
    ] ],
    [ "MDIO PHY Register Access - Clause45 Support", "enet_mdio_clause45_support.html", [
      [ "Overview", "enet_mdio_clause45_support.html#autotoc_md1549", null ],
      [ "Background", "enet_mdio_clause45_support.html#autotoc_md1550", [
        [ "Clause 22 v/s Clause 45", "enet_mdio_clause45_support.html#autotoc_md1551", null ],
        [ "MMD (Management/MDIO Manageable Device) : Required for Clause45 support", "enet_mdio_clause45_support.html#autotoc_md1552", null ]
      ] ],
      [ "Implementation Requirements", "enet_mdio_clause45_support.html#autotoc_md1553", null ],
      [ "Implementation Steps", "enet_mdio_clause45_support.html#autotoc_md1554", [
        [ "Step-1: Modify PHY Driver code with the MMD register as an input argument", "enet_mdio_clause45_support.html#autotoc_md1555", null ],
        [ "Step-2: Update EnetPhy Configuration", "enet_mdio_clause45_support.html#autotoc_md1556", null ],
        [ "Step-3: Common PHY registers access, such as PHY alive, PHY link status, etc uses Clause 22 in order to suport backward compatibility. Replace them with Clause 45 support", "enet_mdio_clause45_support.html#autotoc_md1557", null ]
      ] ],
      [ "Detailed API Reference", "enet_mdio_clause45_support.html#autotoc_md1558", [
        [ "Clause 45 Read Operation", "enet_mdio_clause45_support.html#autotoc_md1559", null ],
        [ "Clause 45 Write Operation", "enet_mdio_clause45_support.html#autotoc_md1560", null ],
        [ "Clause 45 Read-Modify-Write Operation", "enet_mdio_clause45_support.html#autotoc_md1561", null ]
      ] ],
      [ "Key Parameters Explained", "enet_mdio_clause45_support.html#autotoc_md1562", null ],
      [ "Current Limitations", "enet_mdio_clause45_support.html#autotoc_md1563", null ],
      [ "Summary", "enet_mdio_clause45_support.html#autotoc_md1564", null ],
      [ "Limitations", "enet_mdio_clause45_support.html#autotoc_md1565", null ]
    ] ],
    [ "Version Updates from earlier SDKs to Latest", "enet_mcupsdk_10_00_update.html", [
      [ "While upgrading from 11.01 or earlier to latest SDK", "enet_mcupsdk_10_00_update.html#autotoc_md1566", [
        [ "Change Set", "enet_mcupsdk_10_00_update.html#autotoc_md1567", [
          [ "Change-1 Description", "enet_mcupsdk_10_00_update.html#autotoc_md1568", null ],
          [ "Change-1 Impact", "enet_mcupsdk_10_00_update.html#autotoc_md1569", null ],
          [ "Change-2 Description", "enet_mcupsdk_10_00_update.html#autotoc_md1570", null ],
          [ "Change-2 Impact", "enet_mcupsdk_10_00_update.html#autotoc_md1571", null ]
        ] ]
      ] ],
      [ "While upgrading from 11.00 SDK to 11.01 SDK", "enet_mcupsdk_10_00_update.html#autotoc_md1572", [
        [ "Change Set", "enet_mcupsdk_10_00_update.html#autotoc_md1573", [
          [ "Change-1 Description", "enet_mcupsdk_10_00_update.html#autotoc_md1574", null ]
        ] ]
      ] ],
      [ "While upgrading from 10.00 SDK", "enet_mcupsdk_10_00_update.html#autotoc_md1575", [
        [ "Change Set", "enet_mcupsdk_10_00_update.html#autotoc_md1576", [
          [ "Change-1 Description", "enet_mcupsdk_10_00_update.html#autotoc_md1577", null ],
          [ "Change-1 Impact", "enet_mcupsdk_10_00_update.html#autotoc_md1578", null ],
          [ "Change-1 Solution", "enet_mcupsdk_10_00_update.html#autotoc_md1579", null ],
          [ "Change-2 Description", "enet_mcupsdk_10_00_update.html#autotoc_md1580", null ],
          [ "Change-2 Impact", "enet_mcupsdk_10_00_update.html#autotoc_md1581", null ],
          [ "Change-2 Solution", "enet_mcupsdk_10_00_update.html#autotoc_md1582", null ]
        ] ]
      ] ],
      [ "While upgrading from 09.02 SDK or earlier", "enet_mcupsdk_10_00_update.html#autotoc_md1583", [
        [ "Change-1 Description", "enet_mcupsdk_10_00_update.html#autotoc_md1584", null ],
        [ "Change-1 Impact", "enet_mcupsdk_10_00_update.html#autotoc_md1585", null ],
        [ "Change-1 Solution", "enet_mcupsdk_10_00_update.html#autotoc_md1586", [
          [ "Option 1:", "enet_mcupsdk_10_00_update.html#autotoc_md1587", null ],
          [ "Option 2:", "enet_mcupsdk_10_00_update.html#autotoc_md1588", null ]
        ] ],
        [ "Change-2 Description", "enet_mcupsdk_10_00_update.html#autotoc_md1589", null ],
        [ "Change-2 Impact", "enet_mcupsdk_10_00_update.html#autotoc_md1590", null ],
        [ "Change-2 Solution", "enet_mcupsdk_10_00_update.html#autotoc_md1591", null ]
      ] ]
    ] ],
    [ "Ethernet Performance on AM263x", "enetlld_performance.html", [
      [ "Introduction", "enetlld_performance.html#autotoc_md1601", null ],
      [ "Setup Details", "enetlld_performance.html#autotoc_md1602", null ],
      [ "Layer 2 Performance", "enetlld_performance.html#autotoc_md1603", [
        [ "Configuration Details", "enetlld_performance.html#autotoc_md1604", null ],
        [ "Layer 2 Latency", "enetlld_performance.html#autotoc_md1605", null ],
        [ "Layer 2 Throughput", "enetlld_performance.html#autotoc_md1606", null ]
      ] ],
      [ "TCP/IP Performance", "enetlld_performance.html#autotoc_md1607", [
        [ "Configuration Details", "enetlld_performance.html#autotoc_md1608", [
          [ "TCP Throughput", "enetlld_performance.html#autotoc_md1609", null ],
          [ "UDP Throughput", "enetlld_performance.html#autotoc_md1610", null ]
        ] ]
      ] ],
      [ "Ether-Ring Performance", "enetlld_performance.html#autotoc_md1611", null ],
      [ "Ether-Ring Round Trip Latency with CAN(Vehicle) traffic", "enetlld_performance.html#autotoc_md1612", null ],
      [ "See Also", "enetlld_performance.html#autotoc_md1613", null ]
    ] ],
    [ "Enet EST/TAS Support", "enet_tas_top.html", [
      [ "Introduction", "enet_tas_top.html#enet_est_intro", [
        [ "IEEE 802.1Qbv EST/TAS", "enet_tas_top.html#enet_est_intro_est_tas", null ],
        [ "Guard band", "enet_tas_top.html#enet_est_intro_guard_band", null ]
      ] ],
      [ "Enet LLD API", "enet_tas_top.html#enet_est_api", null ],
      [ "CPSW Support", "enet_tas_top.html#enet_est_cpsw", [
        [ "CPSW EST Driver Implementation", "enet_tas_top.html#enet_est_cpsw_driver", null ],
        [ "Programing Guidelines and Limitations", "enet_tas_top.html#enet_est_cpsw_guidelines", [
          [ "Administrative base time", "enet_tas_top.html#enet_est_cpsw_guidelines_admin_basetime", null ],
          [ "Gate control list", "enet_tas_top.html#enet_est_cpsw_guidelines_gate_control_list", null ],
          [ "Guard band", "enet_tas_top.html#enet_est_cpsw_guidelines_guard_band", null ],
          [ "Link-down event", "enet_tas_top.html#enet_est_cpsw_guidelines_link_down", null ],
          [ "Limitations", "enet_tas_top.html#enet_est_cpsw_limitations", null ]
        ] ],
        [ "Debugging and Troubleshooting", "enet_tas_top.html#enet_est_cpsw_debugging", [
          [ "EST Timestamping", "enet_tas_top.html#enet_est_cpsw_timestamping", null ],
          [ "CCS Debug GEL Files", "enet_tas_top.html#enet_est_cpsw_gels", null ]
        ] ]
      ] ]
    ] ],
    [ "Enet Migration Guide", "enet_migration_guide_top.html", [
      [ "Introduction", "enet_migration_guide_top.html#enet_migration_guide_intro", null ],
      [ "Need for sysconfig", "enet_migration_guide_top.html#NeedForSysconfig", null ],
      [ "Enet Driver Initialization Sequence Change", "enet_migration_guide_top.html#EnetInitSeqChange", null ],
      [ "Enet DMA channel open changes", "enet_migration_guide_top.html#EnetDmaChOpenChange", null ],
      [ "Enet DMA channel override Enable", "enet_migration_guide_top.html#EnetDmaChOverrideChange", null ],
      [ "Runtime Control API (Enet_ioctl) change", "enet_migration_guide_top.html#EnetIoctlChange", null ],
      [ "Packet Transmit/Receive API related changes", "enet_migration_guide_top.html#PacketTxRxChange", null ],
      [ "Custom Board Support", "enet_migration_guide_top.html#CustomBoardSupport", null ],
      [ "External PHY management", "enet_migration_guide_top.html#ExternalPhyManagement", null ],
      [ "Tuning memory usage of enet driver for non-lwip apps", "enet_migration_guide_top.html#MemoryTuningNonLwip", null ],
      [ "Tuning memory usage of enet driver for lwip apps", "enet_migration_guide_top.html#MemoryTuningLwip", null ],
      [ "Compatibilty Breaks During MCU+ SDK Version Update", "enet_migration_guide_top.html#autotoc_md1599", [
        [ "Updating to version 10.00", "enet_migration_guide_top.html#autotoc_md1600", null ]
      ] ]
    ] ],
    [ "Ethernet Packet Pool Allocation Guidelines", "PACKETPOOL_CONFIG_TOP.html", null ],
    [ "Ether-Ring Overview", "ETHERRING_OVERVIEW.html", [
      [ "Software Architecture", "ETHERRING_OVERVIEW.html#autotoc_md1614", null ],
      [ "CAN to Ethernet Traffic Simulation", "ETHERRING_OVERVIEW.html#autotoc_md1615", null ],
      [ "Packet Duplication on Transmission", "ETHERRING_OVERVIEW.html#autotoc_md1616", null ],
      [ "Software Assistance on Transmission side", "ETHERRING_OVERVIEW.html#autotoc_md1617", null ],
      [ "Software Assistance on Reception side", "ETHERRING_OVERVIEW.html#autotoc_md1618", null ],
      [ "Duplicate packet Rejection on Reception side(Duplicate Packet Rejection)", "ETHERRING_OVERVIEW.html#autotoc_md1619", null ]
    ] ],
    [ "Ethernet interface (RGMII / MII) selection", "enet_interface_selection.html", null ]
];