import { View, Text, Image } from 'react-native'
import { icons } from '../../../constants'
import { checkImageUrl } from '../../../utils'
import styles from './company.style'

const Company = ({companyLogo, companyTitle, companyName, location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={checkImageUrl(companyLogo) ? {companyLogo}
          :
          (require(`../../../assets/images/hiring/04.png`))
          }
          resizeMode='contain'
          style={styles.logoImage}
        />
      </View>
          <View style={styles.jobTitleBox}>
            <Text style={styles.jobTitle}>
              {companyTitle}
            </Text>
          </View>
          <View style={styles.companyInfoBox}>
            <Text style={styles.companyName}>
              {companyName} /
            </Text>
            <View styles={styles.locationBox}>
              <Image
                  source={icons.location}
                  resizeMode='contain'
                  style={styles.locationImage}
                />
            </View>
            <Text style={styles.locationName}>{location}</Text>
        </View>
    </View>
  )
}

export default Company
