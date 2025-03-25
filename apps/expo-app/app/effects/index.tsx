import { useState } from "react";
import { FlatList } from "react-native";
import {
  Button,
  H1,
  Paragraph,
  XStack,
  YStack,
  Input,
  Separator,
  Form,
  Select
} from "tamagui";
import { router } from "expo-router";
import { observer } from "@legendapp/state/react";
import { effects$, type Effect } from "@/store";
import { useTranslations } from "@/i18n/useTranslations";
import { FontAwesome } from "@expo/vector-icons";

const presetOptions = [
  { name: "Solid", value: 0 },
  { name: "Blink", value: 1 },
  { name: "Breathe", value: 2 },
  { name: "Rainbow", value: 3 },
  { name: "Sweep", value: 4 },
  { name: "Dynamic", value: 5 },
  { name: "Colorloop", value: 6 },
  { name: "Candle", value: 7 },
  { name: "Fireworks", value: 8 },
  { name: "Gradient", value: 9 },
  { name: "Chase", value: 10 }
];

function EffectsScreen() {
  const t = useTranslations();
  const [newEffectName, setNewEffectName] = useState("");
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const effectsList = effects$.list.get();

  const addEffect = () => {
    if (!newEffectName || selectedPreset === null) return;

    const newEffect: Effect = {
      id: Date.now().toString(),
      name: newEffectName,
      presetId: selectedPreset,
      config: {}
    };

    effects$.list.push(newEffect);
    setNewEffectName("");
    setSelectedPreset(null);
    setShowAddForm(false);
  };

  const removeEffect = (id: string) => {
    const index = effectsList.findIndex(effect => effect.id === id);
    if (index !== -1) {
      effects$.list.splice(index, 1);
    }
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
        <H1>{t.effects.title}</H1>
        <Button opacity={0} width={50} />
      </XStack>

      <Separator marginVertical="$4" />

      <Button
        marginBottom="$4"
        icon={<FontAwesome name="plus" size={18} color="white" />}
        onPress={() => setShowAddForm(!showAddForm)}
        themeInverse
      >
        {t.effects.addEffect}
      </Button>

      {showAddForm && (
        <Form
          onSubmit={addEffect}
          marginBottom="$4"
          backgroundColor="$backgroundStrong"
          padding="$3"
          borderRadius="$2"
        >
          <YStack space="$3">
            <Form.Field name="name">
              <Form.Label>Název efektu</Form.Label>
              <Form.Control asChild>
                <Input
                  placeholder="Např. Duha"
                  value={newEffectName}
                  onChangeText={setNewEffectName}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field name="preset">
              <Form.Label>Přednastavený efekt WLED</Form.Label>
              <Form.Control asChild>
                <Select
                  value={
                    selectedPreset !== null
                      ? selectedPreset.toString()
                      : undefined
                  }
                  onValueChange={value => setSelectedPreset(parseInt(value))}
                >
                  <Select.Trigger>
                    <Select.Value placeholder="Vyberte efekt" />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.ScrollUpButton />
                    <Select.Viewport>
                      {presetOptions.map(option => (
                        <Select.Item
                          key={option.value}
                          value={option.value.toString()}
                        >
                          <Select.ItemText>{option.name}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                    <Select.ScrollDownButton />
                  </Select.Content>
                </Select>
              </Form.Control>
            </Form.Field>

            <XStack space="$3" justifyContent="flex-end">
              <Button onPress={() => setShowAddForm(false)} chromeless>
                Zrušit
              </Button>
              <Form.Submit asChild>
                <Button themeInverse>Přidat efekt</Button>
              </Form.Submit>
            </XStack>
          </YStack>
        </Form>
      )}

      {effectsList.length === 0 ? (
        <YStack alignItems="center" justifyContent="center" marginTop="$8">
          <FontAwesome name="magic" size={48} color="gray" />
          <Paragraph marginTop="$2" color="$gray10">
            {t.effects.noEffects}
          </Paragraph>
        </YStack>
      ) : (
        <FlatList
          data={effectsList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            const presetName =
              presetOptions.find(p => p.value === item.presetId)?.name ||
              "Unknown";

            return (
              <YStack
                backgroundColor="$backgroundStrong"
                marginVertical="$2"
                padding="$3"
                borderRadius="$2"
              >
                <XStack justifyContent="space-between" alignItems="center">
                  <YStack>
                    <Paragraph fontWeight="bold">{item.name}</Paragraph>
                    <Paragraph size="$2" opacity={0.6}>
                      WLED efekt: {presetName}
                    </Paragraph>
                  </YStack>
                  <XStack space="$2">
                    <Button
                      size="$3"
                      backgroundColor="$red9"
                      onPress={() => removeEffect(item.id)}
                    >
                      <FontAwesome name="trash" size={16} color="white" />
                    </Button>
                  </XStack>
                </XStack>
              </YStack>
            );
          }}
        />
      )}
    </YStack>
  );
}

export default observer(EffectsScreen);
