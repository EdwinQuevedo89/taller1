import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';



  export default function App() {
    function Mensaje() {
      Alert.alert("Mensaje", "El usuario se ha registrado con éxito")
    }

    const mensaje2 = () => { Alert.alert("Mensaje", "El usuario se ha registrado con éxito") }


  return (
    <View style={styles.container}>
      <Text style={styles.txtTitulo}>REGISTRO DE USUARIO </Text>

      <Text style={styles.txtSub} >Nombre </Text>
      <TextInput
        style={styles.input}
        placeholder='Nombre'
      />

      <Text></Text>
      <Text style={styles.txtSub} >Apellido </Text>
      <TextInput
        style={styles.input}
        placeholder='Apellido'
      />


      <Text></Text>
      <Text style={styles.txtSub} >Correo Electrónico </Text>
      <TextInput
        style={styles.input}
        placeholder='email'
      />

      <Text></Text>
      <Text style={styles.txtSub} >Contraseña </Text>
      <TextInput
        style={styles.input}
        placeholder='password'
      />

      <Text></Text>
      <Text style={styles.txtSub} >Confirmar Contraseña </Text>
      <TextInput
        style={styles.input}
        placeholder='confirmPassword'
      />


      <Text></Text>
      <Text style={styles.txtSub} >Teléfono </Text>
      <TextInput
        style={styles.input}
        placeholder='setPhoneNumber'
      />

      <Text></Text>
      <Text style={styles.txtSub} >Fecha de Nacimiento </Text>
      <TextInput
        style={styles.input}
        placeholder='seleccione fecha'
      />

      <Text></Text>
      <Text style={styles.txtSub} >Genero </Text>
      <TextInput
        style={styles.input}
        placeholder='seleccione genero'
      />


      <Text>Aceptar Términos y Condiciones</Text>
      <View style={styles.btnButton}>
        <Text></Text>
        <Button
          title='Aceptar'
          onPress={Mensaje}
          color='green'
        />
      </View>

      <StatusBar style="auto" />
    </View >
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'left',
  },

  txtTitulo: {
    fontSize: 30
  },

  txtSub: {
    fontSize: 25,
    textAlign: 'right'
  },

  input: {
    backgroundColor: 'white',
    width: '90%',
    height: '4%',
    borderRadius: 10,
  },

  btnButton: {
    flexDirection: "row",

  },



});

