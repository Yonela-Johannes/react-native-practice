import { useState, useCallback } from 'react'
import {
  View,
  Text,
  RefreshControl,
  SafeAreaView,
  ActivityIndicator,
  ScrollView
} from 'react-native'

import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'

import { COLORS, icons, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false)
  const tabs = ["About", "Qualifications", "Responsibilities"]
  const [activeTab, setActiveTab] = useState(tabs[0])
  const { data, isLoading, error, refetch } = useFetch(
    'job-details',
    {
      job_id: params.id
    }
    )
  const onRefresh = () => {

  }

  console.log(data[0]?.job_highlights?.Responsibilities)
  const displayTabContent = () => {
    switch (activeTab) {
      case 'Qualifications':
        return <Specifics
          title="Qualifications"
          points={data[0]?.job_highlights?.Qualifications ?? ['N/A']}
         />
      case "About":
        return <JobAbout
          info={data[0].job_description ?? "No Info provided"}
         />
      case "Responsibilities":
        return  <Specifics
        title="Responsibilities"
        points={data[0]?.job_highlights?.Responsibilities ?? ['N/A']}
       />
      default:
        break;
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1, backgroundColor: COLORS.lightWhite
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerTitle:""
        }}
      >
      </Stack.Screen>
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No Data</Text>
          ) : (
            <View>
              <Company
                companyLogo={data[0]?.employer_logo}
                companyTitle={data[0]?.job_title}
                companyName={data[0]?.employer_name}
                location={data[0]?.job_country}
              />
              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>
        <JobFooter
          url={data[0]?.job_google_link ?? 'https://carreers.google.com/jobs/results'}
        />
      </>
    </SafeAreaView>
  )
}

export default JobDetails
