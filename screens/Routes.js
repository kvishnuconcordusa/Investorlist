import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InvestorList from "./InvestorList";
import InvestorInfo from "./InvestorInfo";

const Stack = createNativeStackNavigator();

export const routes = {
  InvestorInfo: InvestorInfo,
  InvestorList: InvestorList
};
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InvestorList">
        <Stack.Screen name="InvestorList" component={InvestorList} />
        <Stack.Screen name="InvestorInfo" component={InvestorInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Router;