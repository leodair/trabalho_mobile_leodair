import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            bottom: 20, 
          },
          default: {
            bottom: 0, 
            height: 53, // subir a navbar
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'O que é',
          tabBarIcon: ({ color }) => <AntDesign name="exclamationcircle" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Informação',
          tabBarIcon: ({ color }) => <AntDesign name="info" size={30} color={color} />,
        }}
      />

<Tabs.Screen
        name="tratamento"
        options={{
          title: 'Tratamento',
          tabBarIcon: ({ color }) => <FontAwesome6 name="user-doctor" size={24} color={color} />
        }}
      />
    </Tabs>
  );
}