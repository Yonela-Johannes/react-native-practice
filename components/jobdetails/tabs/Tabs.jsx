import { View, Text } from 'react-native'
import { FlatList, TouchableOpacity  } from 'react-native-gesture-handler'
import { SIZES } from '../../../constants'
import styles from './tabs.style'

const TabButton = ({ name, activeTab, onHandleSearchType}) => (
  <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}
  >
    <Text
      style={styles.btnText(name, activeTab)}
    >{name}</Text>
  </TouchableOpacity>
)

const Tabs = ({ tabs, activeTab, setActiveTab}) => {
  return (
    <View
      style={styles.container}
    >
    <FlatList
      data={tabs}
      renderItem={({ item }) => (
        <TabButton
          name={item}
          activeTab={activeTab}
          onHandleSearchType={() => setActiveTab(item)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item}
      contentContainerStyle={{columnGap: SIZES.small}}
    />
    </View>
  )
}

export default Tabs
