export default `
 directive @cacheControl(maxAge: Int) on FIELD_DEFINITION | OBJECT
 type Location @cacheControl(maxAge: 86400) {
 address: String
 cuisine: String
 comment: String
 rating: String
 name: String
 image: String
 on_wishlist: [String] @cacheControl(maxAge: 60)
 location_id: String
 }
`;
