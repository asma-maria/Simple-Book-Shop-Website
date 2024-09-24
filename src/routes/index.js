export const ROUTES={
    HOME: "/",
    ABOUT:"/About",
    SINGLE_PRODUCTS:{
        STATIC:"/detail/:bookId",
        DYNAMIC: (bookId) => `/detail/${bookId}`,
    FAQ:"/faq",    

    },
    
};