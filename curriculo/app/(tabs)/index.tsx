import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nosso currículo</Text>
      <Text style={styles.subtitle}>Byanca e Nicole - 2°C</Text>

      <Link href="/about" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sobre Nós</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/pagina1" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Habilidades</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/pagina2" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Formação</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4b0082',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#333',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4b0082',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginVertical: 8,
    width: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
