import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Authentication from './views/authentication';
import SignUp from './views/signup';
import LoginScreen from './views/LoginScreen';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleShowSignUp = () => setShowSignUp(true);

  return (
    <Authentication>
      <View style={styles.container}>
        {!showLogin && !showSignUp ? (
          <>
            <Button title="Login" onPress={handleShowLogin} />
            <Button title="Sign Up" onPress={handleShowSignUp} />
          </>
        ) : showLogin ? (
          <LoginScreen />
        ) : (
          <SignUp />
        )}
      </View>
    </Authentication>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});