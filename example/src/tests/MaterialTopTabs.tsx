import { createAppContainer } from "react-navigation";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import { createScreen, MasterScreen, DetailScreen } from "../screens";

const StackNavigator1 = createSharedElementStackNavigator(
  {
    Master: createScreen(MasterScreen, "BottomStack1"),
    Detail: DetailScreen
  },
  undefined,
  {
    name: "TopStack1",
    debug: true
  }
);

const StackNavigator2 = createSharedElementStackNavigator(
  {
    Master: createScreen(MasterScreen, "BottomStack2"),
    Detail: DetailScreen
  },
  undefined,
  {
    name: "TopStack2",
    debug: true
  }
);

const TabNavigator = createMaterialTopTabNavigator({
  Tab1: {
    // @ts-ignore
    screen: StackNavigator1,
    navigationOptions: {
      title: "Stack 1"
    }
  },
  Tab2: {
    // @ts-ignore
    screen: StackNavigator2,
    navigationOptions: {
      title: "Stack 2"
    }
  }
});

export default createAppContainer(TabNavigator);
