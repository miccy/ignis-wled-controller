import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { observer } from '@legendapp/state/react';
import { Motion } from '@legendapp/motion';
import { settings$ } from '@state/settings';

export default observer(function SettingsScreen() {
  const theme = settings$.theme.get();
  const autoConnect = settings$.autoConnect.get();
  const discoveryMethod = settings$.discoveryMethod.get();
  const language = settings$.language.get();
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    settings$.theme.set(newTheme);
  };
  
  const toggleAutoConnect = () => {
    settings$.autoConnect.set(!autoConnect);
  };
  
  const setDiscoveryMethod = (method: 'mdns' | 'scan' | 'both') => {
    settings$.discoveryMethod.set(method);
  };
  
  const setLanguage = (lang: string) => {
    settings$.language.set(lang);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vzhled</Text>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Tmavý režim</Text>
          <Switch
            value={theme === 'dark'}
            onValueChange={toggleTheme}
            trackColor={{ false: '#444444', true: '#3b82f6' }}
            thumbColor={theme === 'dark' ? '#ffffff' : '#f4f3f4'}
          />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Připojení</Text>
        
        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Automatické připojení</Text>
          <Switch
            value={autoConnect}
            onValueChange={toggleAutoConnect}
            trackColor={{ false: '#444444', true: '#3b82f6' }}
            thumbColor={autoConnect ? '#ffffff' : '#f4f3f4'}
          />
        </View>
        
        <Text style={styles.settingGroupTitle}>Metoda vyhledávání</Text>
        <View style={styles.optionsContainer}>
          <Motion.View 
            style={[
              styles.optionButton,
              discoveryMethod === 'mdns' && styles.selectedOption
            ]}
            whileTap={{ scale: 0.95 }}
            onTouchEnd={() => setDiscoveryMethod('mdns')}
          >
            <Text style={styles.optionText}>mDNS</Text>
          </Motion.View>
          
          <Motion.View 
            style={[
              styles.optionButton,
              discoveryMethod === 'scan' && styles.selectedOption
            ]}
            whileTap={{ scale: 0.95 }}
            onTouchEnd={() => setDiscoveryMethod('scan')}
          >
            <Text style={styles.optionText}>Skenování IP</Text>
          </Motion.View>
          
          <Motion.View 
            style={[
              styles.optionButton,
              discoveryMethod === 'both' && styles.selectedOption
            ]}
            whileTap={{ scale: 0.95 }}
            onTouchEnd={() => setDiscoveryMethod('both')}
          >
            <Text style={styles.optionText}>Obojí</Text>
          </Motion.View>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Jazyk</Text>
        
        <View style={styles.optionsContainer}>
          <Motion.View 
            style={[
              styles.optionButton,
              language === 'cs' && styles.selectedOption
            ]}
            whileTap={{ scale: 0.95 }}
            onTouchEnd={() => setLanguage('cs')}
          >
            <Text style={styles.optionText}>Čeština</Text>
          </Motion.View>
          
          <Motion.View 
            style={[
              styles.optionButton,
              language === 'en' && styles.selectedOption
            ]}
            whileTap={{ scale: 0.95 }}
            onTouchEnd={() => setLanguage('en')}
          >
            <Text style={styles.optionText}>English</Text>
          </Motion.View>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>O aplikaci</Text>
        <Text style={styles.text}>Ignis WLED Controller</Text>
        <Text style={styles.versionText}>Verze 1.0.0</Text>
        <Text style={styles.copyrightText}>© 2023 Miccy</Text>
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
  section: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingLabel: {
    color: '#dddddd',
    fontSize: 16,
  },
  settingGroupTitle: {
    color: '#aaaaaa',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  optionButton: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: '#3b82f6',
  },
  optionText: {
    color: 'white',
    fontSize: 14,
  },
  text: {
    color: '#dddddd',
    fontSize: 16,
    marginBottom: 4,
  },
  versionText: {
    color: '#aaaaaa',
    fontSize: 14,
    marginBottom: 4,
  },
  copyrightText: {
    color: '#888888',
    fontSize: 12,
  },
}); 