#Hardware 

Purchase Link:
[[Placa de Desenvolvimento ESP32-WROOM-32U DevKitC WiFi Bluetooth IoT com Antena 2.4G e Compatível com Arduino+ para Programação Sem Fio - AliExpress 502]]

### Pinout
```
(U.FL Ant Connector)
          +------------------+
          | [EN]        [GND]|
          |  3V3        GPIO23| <-- MOSI
          |  EN         GPIO22| <-- SCL (I2C)
  ADC1_6  |  GPIO34     GPIO1 | <-- TX0 (Serial)
  ADC1_7  |  GPIO35     GPIO3 | <-- RX0 (Serial)
  ADC1_4  |  GPIO32     GPIO21| <-- SDA (I2C)
  ADC1_5  |  GPIO33     GPIO19| <-- MISO
  ADC1_8  |  GPIO25     GPIO18| <-- SCK
  ADC1_9  |  GPIO26     GPIO5 | <-- SS (Strapping)
  ADC2_7  |  GPIO27     GPIO17| 
  ADC2_6  |  GPIO14     GPIO16| 
  ADC2_5  |  GPIO12     GPIO4 | <-- ADC2_0
  GND     |  GND        GND   |
  ADC2_4  |  GPIO13     GPIO0 | <-- Strapping (Boot)
  ADC2_3  |  GPIO9      GPIO2 | <-- ADC2_2 (Internal LED)
  ADC2_2  |  GPIO10     GPIO15| <-- ADC2_1
  ADC2_1  |  GPIO11     GPIO8 | 
  ADC1_0  |  GPIO36     GPIO7 | 
  ADC1_3  |  GPIO39     GPIO6 | 
  VIN (5V)|  5V         GND   |
          +------[USB]-------+
```

|**Function**|**Pin Labels (GPIO)**|**Notes**|
|---|---|---|
|**Power**|5V (VIN), 3V3, GND|5V is for input; 3V3 is regulated output.|
|**Analog Input (ADC1)**|32, 33, 34, 35, 36, 39|**Best for sensors.** Works even when Wi-Fi is on.|
|**Analog Input (ADC2)**|0, 2, 4, 12, 13, 14, 15, 25, 26, 27|**Caution:** Cannot be used as ADC when Wi-Fi is active.|
|**Capacitive Touch**|0, 2, 4, 12, 13, 14, 15, 27, 32, 33|Internal touch-sensitive pads.|
|**I2C (Default)**|SDA (21), SCL (22)|Can be remapped to almost any GPIO.|
|**SPI (Default)**|MOSI (23), MISO (19), CLK (18), CS (5)|High-speed data for displays/SD cards.|
|**UART (Serial)**|TX0 (1), RX0 (3)|Used for flashing and Serial Monitor.|