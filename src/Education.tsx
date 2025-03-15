import React from "react";
import { AstonSDK, AstonNavigator } from '@aston/sdk';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./Navigation";
import { StackNavigationProp } from "@react-navigation/stack";

type EducationScreenProps = {
    apiKey: string; 
    integratorUserId: string 
}

export default function EducationScreen({ apiKey, integratorUserId }: EducationScreenProps) {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    AstonSDK.init({
        apiKey
    })

  return (
    <AstonNavigator integratorUserId={integratorUserId} onExit={() => { navigation.goBack() }} />
  );
}