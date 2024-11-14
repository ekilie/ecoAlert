import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Animated, ButtonProps } from 'react-native';
import { useColorScheme } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';

interface SectionProps {
  title: string;
  description: string;
  buttonText: string;
  onPress: () => void;
  isDarkMode: boolean;
}

const Section: React.FC<SectionProps> = ({ title, description, buttonText, onPress, isDarkMode }) => (
  <ThemedView style={[styles.sectionContainer, { backgroundColor: isDarkMode ? '#3E4A40' : '#E8F5E9' }]}>
    <ThemedText type="subtitle" style={styles.sectionTitle}>{title}</ThemedText>
    <ThemedText style={styles.sectionDescription}>{description}</ThemedText>
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: isDarkMode ? '#8CC63F' : '#365C2A' }]}>
      <ThemedText style={styles.buttonText}>{buttonText}</ThemedText>
    </TouchableOpacity>
  </ThemedView>
);

const HomeScreen: React.FC = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Fade-in animation for sections
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#8CC63F', dark: '#365C2A' }}
      headerImage={
        <Animated.Image
          source={require('@/assets/images/eco-alert-logo.png')}
          style={[styles.logo, { opacity: fadeAnim }]}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.welcomeText}>ecoAlert</ThemedText>
        <HelloWave />
      </ThemedView>

      <Animated.View style={{ opacity: fadeAnim }}>
        <Section
          title="🌎 Report an Issue"
          description="Help make your community cleaner by reporting waste and environmental hazards. Your contributions make a difference!"
          buttonText="Report Now"
          onPress={() => {/* navigate to report screen */}}
          isDarkMode={isDarkMode}
        />
        
        <Section
          title="📍 Explore Recent Reports"
          description="Check out the latest reports from users in your area and across the globe."
          buttonText="Explore"
          onPress={() => {/* navigate to explore screen */}}
          isDarkMode={isDarkMode}
        />
        
        <Section
          title="🤝 Get Involved"
          description="Join ecoAlert, participate in community cleanups, and track the positive impact you’re helping create."
          buttonText="Join Us"
          onPress={() => {/* navigate to involvement screen */}}
          isDarkMode={isDarkMode}
        />
      </Animated.View>

      <View style={[styles.footerContainer, { backgroundColor: isDarkMode ? '#365C2A' : '#8CC63F' }]}>
        <ThemedText style={styles.footerText}>
          ecoAlert - Empowering communities to keep the environment clean and green!
        </ThemedText>
      </View>
    </ParallaxScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    transform: [{ scale: 0.98 }],
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  sectionDescription: {
    fontSize: 14,
    marginVertical: 8,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  welcomeText: {
    fontSize: 28,
    color: '#91d37c',
    fontWeight: 'bold',
  },
  footerContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },
  footerText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  logo: {
    height: 270,
    width: 270,
    position: 'absolute',
    resizeMode: 'contain',
  },
});
