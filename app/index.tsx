import { Button } from "@/app-example/components/components/Button";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Input } from "../app-example/components/components/input";
export default function Index() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Image
    source={require("@/assets/images/pizza.png" )}
    style={styles.illustration}
      />

      <Text style={styles.title}> PIZZA HUSTH </Text>
      <Text style={styles.subtitle}> Acesse sua conta com email e senha.</Text>

      <View style={styles.form}>
        <Input placeholder="E-mail" keyboardType="email-address"/>
        <Input placeholder="Senha" secureTextEntry />
        <Button label="ENTRAR" />

      </View>
      </View>
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    padding: 32,

  },
  illustration: {
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginTop: 64,
  },

title: {
  fontSize: 24,
  fontWeight: "bold",
  textAlign: "center",
},
subtitle: {
  fontSize: 16,
  textAlign: "center",
  color: "#666",
  },

  form: {
    width: "100%",
    padding: 20,
  },
})

