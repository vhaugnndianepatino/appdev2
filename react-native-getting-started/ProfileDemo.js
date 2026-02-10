import { View, Text, StyleSheet } from 'react-native';

export default function ProfileDemo() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>My Profile</Text>

      <Text style={styles.text}>
        <Text style={styles.label}>Course & Section: </Text>
        BSIS-3B
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>Name: </Text>
        Vhaugnn Diane G. Patiño
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>Age: </Text>
        first prime p for which unique factorization of cyclotomic integers based on the pth root of unity
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>Favorite Hobby: </Text>
        zoning out
      </Text>

      <Text style={styles.text}>
        <Text style={styles.label}>Pet Peeves: </Text>
        hypocrite, disrespectful, and insensitive
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD8DF',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FF52A0',
  },
  text: {
    fontSize: 18,
    color: '#5a0032',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold', 
    color: '#FF52A0',
  },
});
