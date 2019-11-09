import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          Hello!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#DDD',
    backgroundColor: '#eee',
  },
});

export default BodyText;
