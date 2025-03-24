import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Motion } from '@legendapp/motion';

export default function GuideScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Průvodce WLED</Text>
        <Text style={styles.subtitle}>
          Základní informace o ovládání WLED zařízení
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Co je WLED?</Text>
        <Text style={styles.text}>
          WLED je software pro ovládání adresovatelných LED pásků a světel, 
          podporující ESP8266 a ESP32 mikrokontroléry. Umožňuje vytvářet 
          různé světelné efekty, animace a přizpůsobovat barvy.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Připojení k zařízení</Text>
        <Text style={styles.text}>
          1. Ujistěte se, že je WLED zařízení připojeno k vaší Wi-Fi síti.
        </Text>
        <Text style={styles.text}>
          2. Na záložce "Zařízení" klepněte na "Vyhledat zařízení".
        </Text>
        <Text style={styles.text}>
          3. Vyberte své zařízení ze seznamu.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ovládání barev</Text>
        <Text style={styles.text}>
          V detailu zařízení můžete pomocí záložky "Barvy" vybrat požadovanou 
          barvu pomocí barevného kruhu nebo přednastavených barev.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Efekty</Text>
        <Text style={styles.text}>
          WLED nabízí desítky předpřipravených efektů. V záložce "Efekty" 
          můžete vybrat efekt a barevnou paletu pro váš LED pásek.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Segmenty</Text>
        <Text style={styles.text}>
          Segmenty umožňují rozdělit LED pásek na více částí a ovládat 
          každou nezávisle. Můžete nastavit různé efekty a barvy pro 
          každý segment.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Další pomoc</Text>
        <Text style={styles.text}>
          Pro více informací navštivte oficiální dokumentaci WLED na adrese:
        </Text>
        <Text style={styles.link}>https://kno.wled.ge</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaaaaa',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#dddddd',
    marginBottom: 10,
    lineHeight: 22,
  },
  link: {
    fontSize: 16,
    color: '#3b82f6',
    marginTop: 5,
  },
}); 