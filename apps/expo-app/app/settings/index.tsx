import { View } from 'react-native';
import { Button, H1, Paragraph, XStack, YStack, Switch, Separator, Select } from 'tamagui';
import { router } from 'expo-router';
import { observer } from '@legendapp/state/react';
import { settings$ } from '../../state';
import { useTranslations } from '../../i18n/useTranslations';
import { language$, Language } from '../../i18n/useTranslations';
import { FontAwesome } from '@expo/vector-icons';

function SettingsScreen() {
  const t = useTranslations();
  const settings = settings$.get();
  const currentLanguage = language$.get();

  const toggleDarkMode = () => {
    settings$.darkMode.set(!settings.darkMode);
  };

  const changeLanguage = (newLanguage: Language) => {
    language$.set(newLanguage);
  };

  return (
    <YStack f={1} padding="$4" backgroundColor="$background">
      <XStack justifyContent="space-between" alignItems="center">
        <Button 
          icon={<FontAwesome name="arrow-left" size={18} color="white" />} 
          onPress={() => router.back()}
        >
          Zpět
        </Button>
        <H1>{t.settings.title}</H1>
        <Button opacity={0} width={50} />
      </XStack>

      <Separator marginVertical="$4" />

      <YStack space="$4" padding="$2">
        <XStack justifyContent="space-between" alignItems="center">
          <Paragraph>{t.settings.darkMode}</Paragraph>
          <Switch 
            size="$3" 
            checked={settings.darkMode} 
            onCheckedChange={toggleDarkMode} 
          />
        </XStack>

        <XStack justifyContent="space-between" alignItems="center">
          <Paragraph>{t.settings.language}</Paragraph>
          <Select 
            value={currentLanguage} 
            onValueChange={(value) => changeLanguage(value as Language)}
            size="$3"
          >
            <Select.Trigger width={120}>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="cs">
                <Select.ItemText>Čeština</Select.ItemText>
              </Select.Item>
              <Select.Item value="en">
                <Select.ItemText>English</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select>
        </XStack>

        <Separator marginVertical="$2" />

        <YStack marginTop="$2">
          <Paragraph fontWeight="bold">{t.settings.about}</Paragraph>
          <Paragraph marginTop="$2" size="$2">
            IGNIS WLED Controller v1.0.0
          </Paragraph>
          <Paragraph marginTop="$1" size="$2" opacity={0.6}>
            © 2023 IGNIS
          </Paragraph>
        </YStack>
      </YStack>
    </YStack>
  );
}

export default observer(SettingsScreen); 