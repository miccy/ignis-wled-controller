import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import {
  Button,
  H1,
  H2,
  Paragraph,
  XStack,
  YStack,
  Slider,
  Switch,
  Separator,
  ColorPicker,
  Spinner
} from "tamagui";
import { router, useLocalSearchParams } from "expo-router";
import { observer } from "@legendapp/state/react";
import { devices$, effects$ } from "@/store";
import { useTranslations } from "@/i18n/useTranslations";
import { FontAwesome } from "@expo/vector-icons";

function DeviceScreen() {
  const t = useTranslations();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(false);

  const device = devices$.list.find(d => d.id.get() === id)?.get();
  const deviceState = devices$.deviceStates[id || ""]?.get() || {
    on: false,
    brightness: 128,
    segments: []
  };

  const effectsList = effects$.list.get();

  useEffect(() => {
    if (id) {
      // Simulace načítání stavu zařízení
      setIsLoading(true);
      setTimeout(() => {
        // Pokud nemáme stav pro toto zařízení, vytvoříme výchozí
        if (!devices$.deviceStates[id]?.get()) {
          const initialState: State = {
            on: false,
            brightness: 128,
            segments: [
              {
                id: 0,
                start: 0,
                stop: 30,
                colors: [
                  [255, 0, 0],
                  [0, 255, 0],
                  [0, 0, 255]
                ],
                effect: 0,
                palette: 0,
                speed: 128,
                intensity: 128
              }
            ]
          };
          devices$.deviceStates[id].set(initialState);
        }
        setIsLoading(false);
      }, 1000);
    }
  }, [id]);

  if (!device) {
    return (
      <YStack
        f={1}
        padding="$4"
        backgroundColor="$background"
        justifyContent="center"
        alignItems="center"
      >
        <Paragraph>Zařízení nenalezeno</Paragraph>
        <Button marginTop="$4" onPress={() => router.back()}>
          Zpět
        </Button>
      </YStack>
    );
  }

  const togglePower = () => {
    devices$.deviceStates[id!].on.set(!deviceState.on);
  };

  const updateBrightness = (value: number) => {
    devices$.deviceStates[id!].brightness.set(value);
  };

  const updateSegmentColor = (
    segmentId: number,
    colorIndex: number,
    color: [number, number, number]
  ) => {
    const segmentIndex = deviceState.segments.findIndex(
      s => s.id === segmentId
    );
    if (segmentIndex !== -1) {
      devices$.deviceStates[id!].segments[segmentIndex].colors[colorIndex].set(
        color
      );
    }
  };

  const applyEffect = (effectId: string) => {
    // Aplikace efektu na všechny segmenty
    const effect = effectsList.find(e => e.id === effectId);
    if (effect && effect.presetId !== undefined) {
      deviceState.segments.forEach((segment, i) => {
        devices$.deviceStates[id!].segments[i].effect.set(effect.presetId!);
      });
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
        <H1>{device.name}</H1>
        <Button opacity={0} width={50} />
      </XStack>

      <Separator marginVertical="$4" />

      {isLoading ? (
        <YStack f={1} justifyContent="center" alignItems="center">
          <Spinner size="large" />
          <Paragraph marginTop="$4">Připojování k zařízení...</Paragraph>
        </YStack>
      ) : (
        <ScrollView>
          <YStack space="$4">
            <XStack justifyContent="space-between" alignItems="center">
              <H2>Napájení</H2>
              <Switch
                size="$4"
                checked={deviceState.on}
                onCheckedChange={togglePower}
              />
            </XStack>

            <YStack>
              <Paragraph>Jas: {deviceState.brightness}</Paragraph>
              <Slider
                size="$4"
                defaultValue={[deviceState.brightness]}
                min={0}
                max={255}
                step={1}
                onValueChange={([value]) => updateBrightness(value)}
              >
                <Slider.Track>
                  <Slider.TrackActive />
                </Slider.Track>
                <Slider.Thumb index={0} circular />
              </Slider>
            </YStack>

            <Separator />

            <H2>Segmenty</H2>

            {deviceState.segments.map(segment => (
              <YStack
                key={segment.id}
                backgroundColor="$backgroundStrong"
                padding="$3"
                borderRadius="$2"
              >
                <Paragraph fontWeight="bold">
                  Segment {segment.id + 1}
                </Paragraph>
                <Paragraph size="$2">
                  Rozsah: {segment.start} - {segment.stop}
                </Paragraph>

                <YStack marginTop="$2" space="$2">
                  {segment.colors.map((color, i) => (
                    <XStack key={i} space="$2" alignItems="center">
                      <Paragraph size="$2" width={60}>
                        Barva {i + 1}:
                      </Paragraph>
                      <XStack
                        width={30}
                        height={30}
                        backgroundColor={`rgb(${color[0]}, ${color[1]}, ${color[2]})`}
                        borderRadius="$2"
                      />
                      <ColorPicker
                        onColorChange={newColor => {
                          const rgbColor: [number, number, number] = [
                            Math.round(newColor.r * 255),
                            Math.round(newColor.g * 255),
                            Math.round(newColor.b * 255)
                          ];
                          updateSegmentColor(segment.id, i, rgbColor);
                        }}
                      />
                    </XStack>
                  ))}
                </YStack>

                <YStack marginTop="$2">
                  <Paragraph size="$2">Rychlost: {segment.speed}</Paragraph>
                  <Slider
                    size="$3"
                    defaultValue={[segment.speed]}
                    min={0}
                    max={255}
                    step={1}
                    onValueChange={([value]) => {
                      const segmentIndex = deviceState.segments.findIndex(
                        s => s.id === segment.id
                      );
                      if (segmentIndex !== -1) {
                        devices$.deviceStates[id!].segments[
                          segmentIndex
                        ].speed.set(value);
                      }
                    }}
                  >
                    <Slider.Track>
                      <Slider.TrackActive />
                    </Slider.Track>
                    <Slider.Thumb index={0} circular />
                  </Slider>
                </YStack>
              </YStack>
            ))}

            <Separator />

            <H2>Efekty</H2>

            <XStack flexWrap="wrap" gap="$2">
              {effectsList.length > 0 ? (
                effectsList.map(effect => (
                  <Button
                    key={effect.id}
                    size="$3"
                    onPress={() => applyEffect(effect.id)}
                  >
                    {effect.name}
                  </Button>
                ))
              ) : (
                <Paragraph>{t.effects.noEffects}</Paragraph>
              )}
            </XStack>
          </YStack>
        </ScrollView>
      )}
    </YStack>
  );
}

export default observer(DeviceScreen);
