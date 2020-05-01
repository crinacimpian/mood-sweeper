export const HAPPY = 'happy';
export const SAD = 'sad';

export const WATER = 'water';
export const AIR = 'air';
export const EARTH = 'earth';
export const ETHER = 'ether';
export const FIRE = 'fire';

export const MOODS = new Map([[
    HAPPY,{
        mood: HAPPY,
        icon: 'emoticon-outline',
        element: AIR,
        happinessScore: 5,
        color: '#f31313'
    }],
    [SAD, {
        mood: SAD,
        icon: 'emoticon-cry-outline',
        element: WATER,
        happinessScore: -3,
        color: '#f31313'
    }]]);


