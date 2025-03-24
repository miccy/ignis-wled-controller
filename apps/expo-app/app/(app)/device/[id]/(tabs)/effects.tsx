import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { observer } from '@legendapp/state/react';
import { Motion } from '@legendapp/motion';
import { List } from '@legendapp/list';
import { devices$ } from '../../../../../../state/devices';

export default observer(function DeviceEffectsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selectedSegment, setSelectedSegment] = useState(0);
  const deviceState = id ? devices$.deviceStates[id as string]?.state.get() : null;
  const isLoading = devices$.isLoading.get();
  
  if (isLoading || !deviceState) {
    return (
      <View style={styles.centerContent}>
        <Text style={styles.loadingText}>Načítám stav zařízení...</Text>
      </View>
    );
  }

  // Získání segmentů a efektů
  const segments = deviceState.seg || [];
  const effects = deviceState.info?.effects || [];
  const palettes = deviceState.info?.palettes || [];
  
  // Aktuální efekt a paleta pro vybraný segment
  const currentSegment = segments[selectedSegment] || {};
  const currentEffectId = currentSegment.fx || 0;
  const currentPaletteId = currentSegment.pal || 0;

  // Handler pro výběr efektu
  const handleSelectEffect = (effectId: number) => {
    console.log('Selected effect:', effectId);
    // Zde bude později implementace nastavení efektu
  };

  // Handler pro výběr palety
  const handleSelectPalette = (paletteId: number) => {
    console.log('Selected palette:', paletteId);
    // Zde bude později implementace nastavení palety
  };

  // Render funkce pro efekty
  const renderEffect = ({ item, index }: { item: string, index: number }) => {
    const isSelected = currentEffectId === index;
    
    return (
      <Motion.View 
        style={[
          styles.listItem,
          isSelected && styles.selectedItem
        ]}
        whileTap={{ scale: 0.98 }}
        onTouchEnd={() => handleSelectEffect(index)}
      >
        <Text style={[styles.itemText, isSelected && styles.selectedItemText]}>
          {item}
        </Text>
      </Motion.View>
    );
  };

  // Render funkce pro palety
  const renderPalette = ({ item, index }: { item: string, index: number }) => {
    const isSelected = currentPaletteId === index;
    
    return (
      <Motion.View 
        style={[
          styles.listItem,
          isSelected && styles.selectedItem
        ]}
        whileTap={{ scale: 0.98 }}
        onTouchEnd={() => handleSelectPalette(index)}
      >
        <Text style={[styles.itemText, isSelected && styles.selectedItemText]}>
          {item}
        </Text>
      </Motion.View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Výběr segmentu */}
      <View style={styles.segmentRow}>
        {segments.map((segment, index) => (
          <Motion.View 
            key={`segment-${segment.id || index}`}
            style={[
              styles.segmentButton,
              selectedSegment === index && styles.selectedSegment
            ]}
            whileTap={{ scale: 0.95 }}
            onTouchEnd={() => setSelectedSegment(index)}
          >
            <Text 
              style={[
                styles.segmentText,
                selectedSegment === index && styles.selectedSegmentText
              ]}
            >
              {index}
            </Text>
          </Motion.View>
        ))}
      </View>
      
      {/* Efekty a palety */}
      <View style={styles.tabsContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>Efekty</Text>
          {effects.length > 0 ? (
            <List
              data={effects}
              keyExtractor={(item, index) => `effect-${index}`}
              renderItem={renderEffect}
              estimatedItemSize={50}
            />
          ) : (
            <Text style={styles.emptyText}>Žádné efekty nejsou k dispozici</Text>
          )}
        </View>
        
        <View style={styles.rightColumn}>
          <Text style={styles.title}>Palety</Text>
          {palettes.length > 0 ? (
            <List
              data={palettes}
              keyExtractor={(item, index) => `palette-${index}`}
              renderItem={renderPalette}
              estimatedItemSize={50}
            />
          ) : (
            <Text style={styles.emptyText}>Žádné palety nejsou k dispozici</Text>
          )}
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#aaaaaa',
    fontSize: 16,
  },
  segmentRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  segmentButton: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedSegment: {
    backgroundColor: '#3b82f6',
  },
  segmentText: {
    color: '#aaaaaa',
    fontSize: 14,
    fontWeight: '500',
  },
  selectedSegmentText: {
    color: 'white',
  },
  tabsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 1,
    marginRight: 8,
  },
  rightColumn: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  listItem: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  selectedItem: {
    backgroundColor: '#3b82f6',
  },
  itemText: {
    color: '#dddddd',
    fontSize: 14,
  },
  selectedItemText: {
    color: 'white',
    fontWeight: '600',
  },
  emptyText: {
    color: '#aaaaaa',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 24,
  },
}); 