export const ROUTES={
    HOME: "/",
    ABOUT:"/About",
    SINGLE_PRODUCTS:{
        STATIC:"/detail/:detailId",
        DYNAMIC: (detailId) => `/detail/${detailId}`,

    },
    
};