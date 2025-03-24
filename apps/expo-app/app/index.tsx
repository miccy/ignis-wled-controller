import { View } from 'react-native';
import { Button, H1, Paragraph, XStack, YStack, Separator } from 'tamagui';
import { useTranslations } from '../i18n/useTranslations';
import { Link } from 'expo-router';
import { observer } from '@legendapp/state/react';
import { devices$ } from '../state';
import { FontAwesome } from '@expo/vector-icons';

function HomeScreen() {
  const t = useTranslations();
  const deviceCount = devices$.list.length;

  return (
    <YStack f={1} padding="$4" backgroundColor="$background">
      <H1>{t.app.title}</H1>
      <Separator marginVertical="$4" />
      
      <YStack space="$4" marginVertical="$4">
        <Link href="/devices" asChild>
          <Button
            size="$5"
            icon={<FontAwesome name="lightbulb-o" size={24} color="white" />}
            themeInverse
          >
            {t.devices.title} ({deviceCount})
          </Button>
        </Link>
        
        <Link href="/effects" asChild>
          <Button
            size="$5"
            icon={<FontAwesome name="magic" size={24} color="white" />}
            themeInverse
          >
            {t.effects.title}
          </Button>
        </Link>
        
        <Link href="/settings" asChild>
          <Button
            size="$5"
            icon={<FontAwesome name="cog" size={24} color="white" />}
            themeInverse
          >
            {t.settings.title}
          </Button>
        </Link>
      </YStack>
      
      <Paragraph marginTop="auto" textAlign="center" opacity={0.5}>
        IGNIS WLED Controller v1.0.0
      </Paragraph>
    </YStack>
  );
}

export default observer(HomeScreen); 