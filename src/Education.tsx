import React from "react";
import { AstonSDK, AstonNavigator } from '@aston/sdk';
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

type EducationScreenProps = {
    route: { params: { apiKey: string; integratorUserId: string } };
};
  
AstonSDK.init({
    apiKey: "2a5809bf-3094-412d-a98e-58c94bf48c73-5563e8d723fe97eb455f8bf8224a6cba" // testappsdk
})

export default function EducationScreen({ route }: EducationScreenProps) {
    const { apiKey, integratorUserId } = route.params;
    // const navigation = useNavigation<EducationScreenProps>();

  return (
    // <View></View>
    <AstonNavigator integratorUserId='2' onExit={() => { console.log("exit") }} />
  );
}