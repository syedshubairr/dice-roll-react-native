import React, {PropsWithChildren, useState} from 'react';
import {Image, ImageSourcePropType, Pressable, Text, View} from 'react-native';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Five.png';
import {style} from './styles';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type DiceProps = PropsWithChildren<{
  imgUri: ImageSourcePropType;
}>;

const Dice = ({imgUri}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={style.diceImage} source={imgUri} />
    </View>
  );
};

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const diceRoll = () => {
    let random = Math.floor(Math.random() * 6) + 1;
    switch (random) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        break;
    }
    ReactNativeHapticFeedback.trigger('impactHeavy', options);
  };

  return (
    <View style={style.container}>
      <Dice imgUri={diceImage} />
      <Pressable onPress={diceRoll}>
        <Text style={style.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  );
}
export default App;
