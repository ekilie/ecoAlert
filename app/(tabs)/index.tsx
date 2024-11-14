import { Image, StyleSheet, Platform, View, Button } from 'react-native';
import { useColorScheme } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#8CC63F', dark: '#365C2A' }}
      headerImage={
        <Image
          source={require('@/assets/images/eco-alert-logo.png')}
          style={styles.logo}
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.welcomeText}>ecoAlert</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedView style={[
        styles.sectionContainer, 
        { backgroundColor: isDarkMode ? '#3E4A40' : '#E8F5E9' }
      ]}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>🌎 Report an Issue</ThemedText>
        <ThemedText>
          Help make your community cleaner by reporting waste and environmental hazards. 
          Your contributions make a difference!
        </ThemedText>
        <Button
          title="Report Now"
          onPress={() => {/* navigate to report screen */}}
          color={isDarkMode ? '#8CC63F' : '#365C2A'}
        />
      </ThemedView>

      <ThemedView style={[
        styles.sectionContainer, 
        { backgroundColor: isDarkMode ? '#3E4A40' : '#E8F5E9' }
      ]}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>📍 Explore Recent Reports</ThemedText>
        <ThemedText>
          Check out the latest reports from users in your area and across the globe.
        </ThemedText>
        <Button
          title="Explore"
          onPress={() => {/* navigate to explore screen */}}
          color={isDarkMode ? '#8CC63F' : '#365C2A'}
        />
      </ThemedView>

      <ThemedView style={[
        styles.sectionContainer, 
        { backgroundColor: isDarkMode ? '#3E4A40' : '#E8F5E9' }
      ]}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>🤝 Get Involved</ThemedText>
        <ThemedText>
          Join ecoAlert, participate in community cleanups, and track the positive impact you’re helping create.
        </ThemedText>
        <Button
          title="Join Us"
          onPress={() => {/* navigate to involvement screen */}}
          color={isDarkMode ? '#8CC63F' : '#365C2A'}
        />
      </ThemedView>
      
      <View style={[styles.footerContainer, { backgroundColor: isDarkMode ? '#365C2A' : '#8CC63F' }]}>
        <ThemedText style={styles.footerText}>
          ecoAlert - Empowering communities to keep the environment clean and green!
        </ThemedText>
      </View>
    </ParallaxScrollView>
  );
}

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
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 26,
    color: '#365C2A',
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
  },
  logo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
