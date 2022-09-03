import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';

const OnboardingScreen = () => {
  return (
    <Onboarding
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image style={{height: 350, width: 400,}} source={require('../../images/never_give_up.png')} />,
                title: 'Hard Work',
                subtitle: 'Little drops make an ocean. One commit a day will go a long way',
                titleStyles: {fontWeight:'700'}
            },
            {
                backgroundColor: '#fff',
                title: 'Team',
                image: <Image style={{height: 350, width: 400 }} source={require('../../images/Business.png')} />,
                subtitle: 'A team is group of like minded people working with the same commitment towards a goal',
                titleStyles: {color: '#8caef5', fontWeight:'600'},
                subTitleStyles:{color: '#8faff5'}
            },
            {
                backgroundColor: '#fff',
                image: <Image style={{height: 350, width: 400 }} source={require('../../images/success.png')} />,
                title: 'Success',
                subtitle: 'Utmost commitment plus persistence always breed success. Never Give Up',
                titleStyles: {color: 'purple', fontWeight: '700'},
                subTitleStyles:{color: '#bb37d2'}
            },
        ]}
    />
  )
}

export default OnboardingScreen
