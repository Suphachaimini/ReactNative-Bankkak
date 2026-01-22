import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Link href="/page2" style={styles.link}>
        <Text style={styles.linkText}>ไปหน้าที่ 2</Text>
      </Link>

      <View style={styles.gridContainer}>
        <Link href="/flexbox/ex01" style={styles.gridLink}>
          <Text style={styles.linkText}>1</Text>
        </Link>
        <Link href="/flexbox/ex02" style={styles.gridLink}>
          <Text style={styles.linkText}>2</Text>
        </Link>
        <Link href="/flexbox/ex03" style={styles.gridLink}>
          <Text style={styles.linkText}>3</Text>
        </Link>
        <Link href="/flexbox/ex04" style={styles.gridLink}>
          <Text style={styles.linkText}>4</Text>
        </Link>
        <Link href="/flexbox/ex05" style={styles.gridLink}>
          <Text style={styles.linkText}>5</Text>
        </Link>
        <Link href="/flexbox/ex06" style={styles.gridLink}>
          <Text style={styles.linkText}>6</Text>
        </Link>
        <Link href="/flexbox/ex07" style={styles.gridLink}>
          <Text style={styles.linkText}>7</Text>
        </Link>
        <Link href="/flexbox/ex08" style={styles.gridLink}>
          <Text style={styles.linkText}>8</Text>
        </Link>
        <Link href="/flexbox/ex09" style={styles.gridLink}>
          <Text style={styles.linkText}>9</Text>
        </Link>
        <Link href="/flexbox/ex10" style={styles.gridLink}>
          <Text style={styles.linkText}>10</Text>
        </Link>
        <Link href="/flexbox/ex11" style={styles.gridLink}>
          <Text style={styles.linkText}>11</Text>
        </Link>
        <Link href="/flexbox/ex12" style={styles.gridLink}>
          <Text style={styles.linkText}>12</Text>
        </Link>
      </View>

      <Link href="/test-components" style={styles.link}>
        <Text style={styles.linkText}>Test Components</Text>
      </Link>
      <Link href="/test-greeting" style={styles.link}>
        <Text style={styles.linkText}>Test Greeting</Text>
      </Link>
      <Link href="/travel" style={styles.link}>
        <Text style={styles.linkText}>Travel</Text>
      </Link>
      <Link href="/resort" style={styles.link}>
        <Text style={styles.linkText}>resort</Text>
      </Link>
      <Link href="/health" style={styles.link}>
        <Text style={styles.linkText}>Health</Text>
      </Link>
      <Link href="/home" style={styles.link}>
        <Text style={styles.linkText}>Home</Text>
      </Link>
      <Link href="/chart" style={styles.link}>
        <Text style={styles.linkText}>Chart</Text>
      </Link>
      <Link href="/your-health" style={styles.link}>
        <Text style={styles.linkText}>Your Health</Text>
      </Link>
      <Link href="/todolist" style={styles.link}>
        <Text style={styles.linkText}>Todo List</Text>
      </Link>
      <Link href="/location" style={styles.link}>
        <Text style={styles.linkText}>Location</Text>
      </Link>
      <Link href="/ant" style={styles.link}>
        <Text style={styles.linkText}>heros</Text>
      </Link>
      <Link href="/Charmander" style={styles.link}>
        <Text style={styles.linkText}>Pokemon</Text>
      </Link>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#d9f9b1"
  },

  link: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },


  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  gridLink: {
    margin: 5,
    padding: 15,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  linkText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});