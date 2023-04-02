import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageUrl } from '../../../../utils'
import styles from './nearbyjobcard.style'

const NearbyJobCard = ({job, handleNavigate}) => {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity
        style={styles.logoContainer}
      >
      <Image
        source={checkImageUrl(job.employer_logo) ? {uri: job.employer_logo}
        :
        (require(`../../../../assets/images/hiring/04.png`))
        }
        resizeMode='contain'
        style={styles.logoImage}
       />
      </TouchableOpacity>

      <View
        style={styles.textContainer}
      >
        <Text
          style={styles.jobName}
          numberOfLines={1}
        >
          {job.job_title}
        </Text>
        <Text
          style={styles.jobType}
          numberOfLines={1}
        >
          {job.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard
