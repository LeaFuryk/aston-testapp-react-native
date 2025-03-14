import React from "react";
// import { AstonSDK, AstonNavigator } from '@aston/sdk';
import { View } from "react-native";

type EducationScreenProps = {
    route: { params: { apiKey: string; integratorUserId: string } };
};
  

export default function EducationScreen({ route }: EducationScreenProps) {
    const { apiKey, integratorUserId } = route.params;

  return (
    <View></View>
    // <AstonNavigator integratorUserId='2' onExit={() => { router.back() }} />
  );
}