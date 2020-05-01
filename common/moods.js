export const HAPPY = 'Happy';
export const LAZY = 'Lazy';
export const TOGHETHERNESS = 'Togetherness';
export const SAD = 'Sad';
export const ALERT = 'Alert';
export const ANGER = 'Angry';
export const CREATIVE = 'Creative';
export const RUNAWAY = 'Run away';
export const CONTENT = 'Content';
export const FEAR = 'Fear';

export const WATER = 'water';
export const AIR = 'air';
export const EARTH = 'earth';
export const ETHER = 'ether';
export const FIRE = 'fire';

export const MOODS = new Map([
    [HAPPY,{
        mood: HAPPY,
        icon: 'emoticon-outline',
        element: EARTH,
        happinessScore: 1,
        color: '#2089dc'
    }],
    [LAZY, {
        mood: LAZY,
        icon: 'hotel',
        element: EARTH,
        happinessScore: -1,
        color: '#f31313'
    }],
    [TOGHETHERNESS,{
        mood: TOGHETHERNESS,
        icon: 'account-multiple-plus',
        element: WATER,
        happinessScore: 1,
        color: '#2089dc'
    }],
    [SAD, {
        mood: SAD,
        icon: 'emoticon-cry-outline',
        element: WATER,
        happinessScore: -1,
        color: '#f31313'
    }],
    [ALERT,{
        mood: ALERT,
        icon: 'school',
        element: FIRE,
        happinessScore: 1,
        color: '#2089dc'
    }],
    [ANGER, {
        mood: ANGER,
        icon: 'emoticon-angry-outline',
        element: FIRE,
        happinessScore: -1,
        color: '#f31313'
    }],
    [CREATIVE,{
        mood: CREATIVE,
        icon: 'artist-outline',
        element: AIR,
        happinessScore: 1,
        color: '#2089dc'
    }],
    [RUNAWAY, {
        mood: RUNAWAY,
        icon: 'run-fast',
        element: AIR,
        happinessScore: -1,
        color: '#f31313'
    }],
    [CONTENT,{
        mood: CONTENT,
        icon: 'spa-outline',
        element: ETHER,
        happinessScore: 1,
        color: '#2089dc'
    }],
    [FEAR, {
        mood: FEAR,
        icon: 'emoticon-neutral-outline',
        element: ETHER,
        happinessScore: -1,
        color: '#f31313'
    }]
]);


