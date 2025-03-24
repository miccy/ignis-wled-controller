import { useState } from 'react';
import { FlatList } from 'react-native';
import { Button, H1, Paragraph, XStack, YStack, Input, Separator } from 'tamagui';
import { router } from 'expo-router';
import { observer } from '@legendapp/state/react';
import { devices$ } from '../../state';
import { useTranslations } from '../../i18n/useTranslations';
import { FontAwesome } from '@expo/vector-icons';
import { Device } from '../../state/devices';

function DevicesScreen() {
  const t = useTranslations();
  const [newDeviceIp, setNewDeviceIp] = useState('');

  const devicesList = devices$.list.get();

  const addDevice = () => {
    if (!newDeviceIp) return;

    const newDevice: Device = {
      id: Date.now().toString(),
      name: `WLED Device ${devicesList.length + 1}`,
      ipAddress: newDeviceIp,
      connected: false,
    };

    devices$.list.push(newDevice);
    setNewDeviceIp('');
  };

  const removeDevice = (id: string) => {
    const index = devicesList.findIndex(device => device.id === id);
    if (index !== -1) {
      devices$.list.splice(index, 1);
    }
  };

  const toggleConnection = (id: string) => {
    const index = devicesList.findIndex(device => device.id === id);
    if (index !== -1) {
      const device = devicesList[index];
      devices$.list[index].connected.set(!device.connected);
    }
  };

  const navigateToDevice = (id: string) => {
    devices$.selectedId.set(id);
    router.push(`/devices/${id}`);
  };

  return (
    <YStack f={1} padding="$4" backgroundColor="$background">
      <XStack justifyContent="space-between" alignItems="center">
        <Button icon={<FontAwesome name="arrow-left" size={18} color="white" />} onPress={() => router.back()}>
          Zpět
        </Button>
        <H1>{t.devices.title}</H1>
        <Button opacity={0} width={50} />
      </XStack>

      <Separator marginVertical="$4" />

      <XStack marginVertical="$2" space="$2">
        <Input
          flex={1}
          placeholder="IP adresa (např. 192.168.1.100)"
          value={newDeviceIp}
          onChangeText={setNewDeviceIp}
        />
        <Button onPress={addDevice} themeInverse>
          {t.devices.addDevice}
        </Button>
      </XStack>

      {devicesList.length === 0 ? (
        <YStack alignItems="center" justifyContent="center" marginTop="$8">
          <FontAwesome name="lightbulb-o" size={48} color="gray" />
          <Paragraph marginTop="$2" color="$gray10">
            {t.devices.noDevices}
          </Paragraph>
        </YStack>
      ) : (
        <FlatList
          data={devicesList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <YStack 
              backgroundColor="$backgroundStrong" 
              marginVertical="$2" 
              padding="$3" 
              borderRadius="$2"
            >
              <XStack justifyContent="space-between" alignItems="center">
                <YStack>
                  <Paragraph fontWeight="bold">{item.name}</Paragraph>
                  <Paragraph size="$2" opacity={0.6}>{item.ipAddress}</Paragraph>
                </YStack>
                <XStack space="$2">
                  <Button
                    size="$3"
                    backgroundColor={item.connected ? "$red9" : "$green9"}
                    onPress={() => toggleConnection(item.id)}
                  >
                    {item.connected ? t.devices.disconnect : t.devices.connect}
                  </Button>
                  <Button
                    size="$3"
                    onPress={() => navigateToDevice(item.id)}
                    disabled={!item.connected}
                    opacity={item.connected ? 1 : 0.5}
                  >
                    Ovládat
                  </Button>
                  <Button
                    size="$3"
                    backgroundColor="$red9"
                    onPress={() => removeDevice(item.id)}
                  >
                    <FontAwesome name="trash" size={16} color="white" />
                  </Button>
                </XStack>
              </XStack>
            </YStack>
          )}
        />
      )}
    </YStack>
  );
}

export default observer(DevicesScreen); 