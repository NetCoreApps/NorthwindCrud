/* Options:
Date: 2023-11-25 10:37:30
Version: 8.0
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//AddServiceStackTypes: True
//AddDocAnnotations: True
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/

"use strict";
export class QueryBase {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {?number} */
    skip;
    /** @type {?number} */
    take;
    /** @type {string} */
    orderBy;
    /** @type {string} */
    orderByDesc;
    /** @type {string} */
    include;
    /** @type {string} */
    fields;
    /** @type {{ [index: string]: string; }} */
    meta;
}
/** @typedef T {any} */
export class QueryDb extends QueryBase {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
}
export class Category {
    /** @param {{id?:number,categoryName?:string,description?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    categoryName;
    /** @type {string} */
    description;
}
export class Customer {
    /** @param {{id?:string,companyName?:string,contactName?:string,contactTitle?:string,address?:string,city?:string,region?:string,postalCode?:string,country?:string,phone?:string,fax?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {string} */
    companyName;
    /** @type {string} */
    contactName;
    /** @type {string} */
    contactTitle;
    /** @type {string} */
    address;
    /** @type {string} */
    city;
    /** @type {string} */
    region;
    /** @type {string} */
    postalCode;
    /** @type {string} */
    country;
    /** @type {string} */
    phone;
    /** @type {string} */
    fax;
}
export class Employee {
    /** @param {{id?:number,lastName?:string,firstName?:string,title?:string,titleOfCourtesy?:string,birthDate?:string,hireDate?:string,address?:string,city?:string,region?:string,postalCode?:string,country?:string,homePhone?:string,extension?:string,photo?:string,notes?:string,reportsTo?:number,photoPath?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    lastName;
    /** @type {string} */
    firstName;
    /** @type {string} */
    title;
    /** @type {string} */
    titleOfCourtesy;
    /** @type {string} */
    birthDate;
    /** @type {string} */
    hireDate;
    /** @type {string} */
    address;
    /** @type {string} */
    city;
    /** @type {string} */
    region;
    /** @type {string} */
    postalCode;
    /** @type {string} */
    country;
    /** @type {string} */
    homePhone;
    /** @type {string} */
    extension;
    /** @type {string} */
    photo;
    /** @type {string} */
    notes;
    /** @type {?number} */
    reportsTo;
    /** @type {string} */
    photoPath;
}
export class EmployeeTerritory {
    /** @param {{id?:string,employeeId?:number,territoryId?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {number} */
    employeeId;
    /** @type {string} */
    territoryId;
}
export class OrderDetail {
    /** @param {{id?:string,orderId?:number,productId?:number,unitPrice?:number,quantity?:number,discount?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {number} */
    orderId;
    /** @type {number} */
    productId;
    /** @type {number} */
    unitPrice;
    /** @type {number} */
    quantity;
    /** @type {number} */
    discount;
}
export class Order {
    /** @param {{id?:number,customerId?:string,employeeId?:number,orderDate?:string,requiredDate?:string,shippedDate?:string,shipVia?:number,freight?:number,shipName?:string,shipAddress?:string,shipCity?:string,shipRegion?:string,shipPostalCode?:string,shipCountry?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    customerId;
    /** @type {number} */
    employeeId;
    /** @type {string} */
    orderDate;
    /** @type {string} */
    requiredDate;
    /** @type {string} */
    shippedDate;
    /** @type {?number} */
    shipVia;
    /** @type {number} */
    freight;
    /** @type {string} */
    shipName;
    /** @type {string} */
    shipAddress;
    /** @type {string} */
    shipCity;
    /** @type {string} */
    shipRegion;
    /** @type {string} */
    shipPostalCode;
    /** @type {string} */
    shipCountry;
}
export class Product {
    /** @param {{id?:number,productName?:string,supplierId?:number,categoryId?:number,quantityPerUnit?:string,unitPrice?:number,unitsInStock?:number,unitsOnOrder?:number,reorderLevel?:number,discontinued?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    productName;
    /** @type {number} */
    supplierId;
    /** @type {number} */
    categoryId;
    /** @type {string} */
    quantityPerUnit;
    /** @type {number} */
    unitPrice;
    /** @type {number} */
    unitsInStock;
    /** @type {number} */
    unitsOnOrder;
    /** @type {number} */
    reorderLevel;
    /** @type {number} */
    discontinued;
}
export class Region {
    /** @param {{id?:number,regionDescription?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    regionDescription;
}
export class Shipper {
    /** @param {{id?:number,companyName?:string,phone?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    companyName;
    /** @type {string} */
    phone;
}
export class Supplier {
    /** @param {{id?:number,companyName?:string,contactName?:string,contactTitle?:string,address?:string,city?:string,region?:string,postalCode?:string,country?:string,phone?:string,fax?:string,homePage?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    companyName;
    /** @type {string} */
    contactName;
    /** @type {string} */
    contactTitle;
    /** @type {string} */
    address;
    /** @type {string} */
    city;
    /** @type {string} */
    region;
    /** @type {string} */
    postalCode;
    /** @type {string} */
    country;
    /** @type {string} */
    phone;
    /** @type {string} */
    fax;
    /** @type {string} */
    homePage;
}
export class Territory {
    /** @param {{id?:string,territoryDescription?:string,regionId?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {string} */
    territoryDescription;
    /** @type {number} */
    regionId;
}
export class UserAuthRole {
    /** @param {{id?:number,userAuthId?:number,role?:string,permission?:string,createdDate?:string,modifiedDate?:string,refId?:number,refIdStr?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    userAuthId;
    /** @type {string} */
    role;
    /** @type {string} */
    permission;
    /** @type {string} */
    createdDate;
    /** @type {string} */
    modifiedDate;
    /** @type {?number} */
    refId;
    /** @type {string} */
    refIdStr;
    /** @type {{ [index: string]: string; }} */
    meta;
}
export class ValidateRule {
    /** @param {{validator?:string,condition?:string,errorCode?:string,message?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    validator;
    /** @type {string} */
    condition;
    /** @type {string} */
    errorCode;
    /** @type {string} */
    message;
}
export class ValidationRule extends ValidateRule {
    /** @param {{id?:number,type?:string,field?:string,createdBy?:string,createdDate?:string,modifiedBy?:string,modifiedDate?:string,suspendedBy?:string,suspendedDate?:string,notes?:string,validator?:string,condition?:string,errorCode?:string,message?:string}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    type;
    /** @type {string} */
    field;
    /** @type {string} */
    createdBy;
    /** @type {?string} */
    createdDate;
    /** @type {string} */
    modifiedBy;
    /** @type {?string} */
    modifiedDate;
    /** @type {string} */
    suspendedBy;
    /** @type {?string} */
    suspendedDate;
    /** @type {string} */
    notes;
}
export class ResponseError {
    /** @param {{errorCode?:string,fieldName?:string,message?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    errorCode;
    /** @type {string} */
    fieldName;
    /** @type {string} */
    message;
    /** @type {{ [index: string]: string; }} */
    meta;
}
export class ResponseStatus {
    /** @param {{errorCode?:string,message?:string,stackTrace?:string,errors?:ResponseError[],meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    errorCode;
    /** @type {string} */
    message;
    /** @type {string} */
    stackTrace;
    /** @type {ResponseError[]} */
    errors;
    /** @type {{ [index: string]: string; }} */
    meta;
}
export class HelloResponse {
    /** @param {{result?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    result;
}
export class AllSessionsResponse {
    /** @param {{sessionKeys?:string[],sessions?:{ [index: string]: IAuthSession; },responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string[]} */
    sessionKeys;
    /** @type {{ [index: string]: IAuthSession; }} */
    sessions;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class AuthenticateResponse {
    /** @param {{userId?:string,sessionId?:string,userName?:string,displayName?:string,referrerUrl?:string,bearerToken?:string,refreshToken?:string,profileUrl?:string,roles?:string[],permissions?:string[],responseStatus?:ResponseStatus,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userId;
    /** @type {string} */
    sessionId;
    /** @type {string} */
    userName;
    /** @type {string} */
    displayName;
    /** @type {string} */
    referrerUrl;
    /** @type {string} */
    bearerToken;
    /** @type {string} */
    refreshToken;
    /** @type {string} */
    profileUrl;
    /** @type {string[]} */
    roles;
    /** @type {string[]} */
    permissions;
    /** @type {ResponseStatus} */
    responseStatus;
    /** @type {{ [index: string]: string; }} */
    meta;
}
export class AssignRolesResponse {
    /** @param {{allRoles?:string[],allPermissions?:string[],meta?:{ [index: string]: string; },responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string[]} */
    allRoles;
    /** @type {string[]} */
    allPermissions;
    /** @type {{ [index: string]: string; }} */
    meta;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class UnAssignRolesResponse {
    /** @param {{allRoles?:string[],allPermissions?:string[],meta?:{ [index: string]: string; },responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string[]} */
    allRoles;
    /** @type {string[]} */
    allPermissions;
    /** @type {{ [index: string]: string; }} */
    meta;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class RegisterResponse {
    /** @param {{userId?:string,sessionId?:string,userName?:string,referrerUrl?:string,bearerToken?:string,refreshToken?:string,roles?:string[],permissions?:string[],responseStatus?:ResponseStatus,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userId;
    /** @type {string} */
    sessionId;
    /** @type {string} */
    userName;
    /** @type {string} */
    referrerUrl;
    /** @type {string} */
    bearerToken;
    /** @type {string} */
    refreshToken;
    /** @type {string[]} */
    roles;
    /** @type {string[]} */
    permissions;
    /** @type {ResponseStatus} */
    responseStatus;
    /** @type {{ [index: string]: string; }} */
    meta;
}
/** @typedef T {any} */
export class QueryResponse {
    /** @param {{offset?:number,total?:number,results?:T[],meta?:{ [index: string]: string; },responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    offset;
    /** @type {number} */
    total;
    /** @type {T[]} */
    results;
    /** @type {{ [index: string]: string; }} */
    meta;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class IdResponse {
    /** @param {{id?:string,responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class Hello {
    /** @param {{name?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    name;
    getTypeName() { return 'Hello' }
    getMethod() { return 'POST' }
    createResponse() { return new HelloResponse() }
}
export class AllSessions {
    constructor(init) { Object.assign(this, init) }
    getTypeName() { return 'AllSessions' }
    getMethod() { return 'POST' }
    createResponse() { return new AllSessionsResponse() }
}
export class Authenticate {
    /** @param {{provider?:string,state?:string,oauth_token?:string,oauth_verifier?:string,userName?:string,password?:string,rememberMe?:boolean,errorView?:string,nonce?:string,uri?:string,response?:string,qop?:string,nc?:string,cnonce?:string,accessToken?:string,accessTokenSecret?:string,scope?:string,returnUrl?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /**
     * @type {string}
     * @description AuthProvider, e.g. credentials */
    provider;
    /** @type {string} */
    state;
    /** @type {string} */
    oauth_token;
    /** @type {string} */
    oauth_verifier;
    /** @type {string} */
    userName;
    /** @type {string} */
    password;
    /** @type {?boolean} */
    rememberMe;
    /** @type {string} */
    errorView;
    /** @type {string} */
    nonce;
    /** @type {string} */
    uri;
    /** @type {string} */
    response;
    /** @type {string} */
    qop;
    /** @type {string} */
    nc;
    /** @type {string} */
    cnonce;
    /** @type {string} */
    accessToken;
    /** @type {string} */
    accessTokenSecret;
    /** @type {string} */
    scope;
    /** @type {string} */
    returnUrl;
    /** @type {{ [index: string]: string; }} */
    meta;
    getTypeName() { return 'Authenticate' }
    getMethod() { return 'POST' }
    createResponse() { return new AuthenticateResponse() }
}
export class AssignRoles {
    /** @param {{userName?:string,permissions?:string[],roles?:string[],meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userName;
    /** @type {string[]} */
    permissions;
    /** @type {string[]} */
    roles;
    /** @type {{ [index: string]: string; }} */
    meta;
    getTypeName() { return 'AssignRoles' }
    getMethod() { return 'POST' }
    createResponse() { return new AssignRolesResponse() }
}
export class UnAssignRoles {
    /** @param {{userName?:string,permissions?:string[],roles?:string[],meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userName;
    /** @type {string[]} */
    permissions;
    /** @type {string[]} */
    roles;
    /** @type {{ [index: string]: string; }} */
    meta;
    getTypeName() { return 'UnAssignRoles' }
    getMethod() { return 'POST' }
    createResponse() { return new UnAssignRolesResponse() }
}
export class Register {
    /** @param {{userName?:string,firstName?:string,lastName?:string,displayName?:string,email?:string,password?:string,confirmPassword?:string,autoLogin?:boolean,errorView?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userName;
    /** @type {string} */
    firstName;
    /** @type {string} */
    lastName;
    /** @type {string} */
    displayName;
    /** @type {string} */
    email;
    /** @type {string} */
    password;
    /** @type {string} */
    confirmPassword;
    /** @type {?boolean} */
    autoLogin;
    /** @type {string} */
    errorView;
    /** @type {{ [index: string]: string; }} */
    meta;
    getTypeName() { return 'Register' }
    getMethod() { return 'POST' }
    createResponse() { return new RegisterResponse() }
}
export class QueryCategories extends QueryDb {
    /** @param {{id?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    id;
    getTypeName() { return 'QueryCategories' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryCustomers extends QueryDb {
    /** @param {{id?:string,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {string} */
    id;
    getTypeName() { return 'QueryCustomers' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryEmployees extends QueryDb {
    /** @param {{id?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    id;
    getTypeName() { return 'QueryEmployees' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryEmployeeTerritories extends QueryDb {
    /** @param {{id?:string,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {string} */
    id;
    getTypeName() { return 'QueryEmployeeTerritories' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryOrderDetails extends QueryDb {
    /** @param {{id?:string,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {string} */
    id;
    getTypeName() { return 'QueryOrderDetails' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryOrders extends QueryDb {
    /** @param {{id?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    id;
    getTypeName() { return 'QueryOrders' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryProducts extends QueryDb {
    /** @param {{id?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    id;
    getTypeName() { return 'QueryProducts' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryRegions extends QueryDb {
    /** @param {{id?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    id;
    getTypeName() { return 'QueryRegions' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryShippers extends QueryDb {
    /** @param {{id?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    id;
    getTypeName() { return 'QueryShippers' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QuerySuppliers extends QueryDb {
    /** @param {{id?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    id;
    getTypeName() { return 'QuerySuppliers' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryTerritories extends QueryDb {
    /** @param {{id?:string,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {string} */
    id;
    getTypeName() { return 'QueryTerritories' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryUserAuthRoles extends QueryDb {
    /** @param {{id?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    id;
    getTypeName() { return 'QueryUserAuthRoles' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryValidationRules extends QueryDb {
    /** @param {{id?:number,skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    /** @type {?number} */
    id;
    getTypeName() { return 'QueryValidationRules' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class CreateCustomer {
    /** @param {{id?:string,companyName?:string,contactName?:string,contactTitle?:string,address?:string,city?:string,region?:string,postalCode?:string,country?:string,phone?:string,fax?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {string} */
    companyName;
    /** @type {string} */
    contactName;
    /** @type {string} */
    contactTitle;
    /** @type {string} */
    address;
    /** @type {string} */
    city;
    /** @type {string} */
    region;
    /** @type {string} */
    postalCode;
    /** @type {string} */
    country;
    /** @type {string} */
    phone;
    /** @type {string} */
    fax;
    getTypeName() { return 'CreateCustomer' }
    getMethod() { return 'POST' }
    createResponse() { return new IdResponse() }
}
export class CreateEmployee {
    /** @param {{id?:number,lastName?:string,firstName?:string,title?:string,titleOfCourtesy?:string,birthDate?:string,hireDate?:string,address?:string,city?:string,region?:string,postalCode?:string,country?:string,homePhone?:string,extension?:string,photo?:string,notes?:string,reportsTo?:number,photoPath?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    lastName;
    /** @type {string} */
    firstName;
    /** @type {string} */
    title;
    /** @type {string} */
    titleOfCourtesy;
    /** @type {string} */
    birthDate;
    /** @type {string} */
    hireDate;
    /** @type {string} */
    address;
    /** @type {string} */
    city;
    /** @type {string} */
    region;
    /** @type {string} */
    postalCode;
    /** @type {string} */
    country;
    /** @type {string} */
    homePhone;
    /** @type {string} */
    extension;
    /** @type {string} */
    photo;
    /** @type {string} */
    notes;
    /** @type {?number} */
    reportsTo;
    /** @type {string} */
    photoPath;
    getTypeName() { return 'CreateEmployee' }
    getMethod() { return 'POST' }
    createResponse() { return new IdResponse() }
}
export class CreateEmployeeTerritory {
    /** @param {{id?:string,employeeId?:number,territoryId?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {number} */
    employeeId;
    /** @type {string} */
    territoryId;
    getTypeName() { return 'CreateEmployeeTerritory' }
    getMethod() { return 'POST' }
    createResponse() { return new IdResponse() }
}
export class CreateOrder {
    /** @param {{id?:number,customerId?:string,employeeId?:number,orderDate?:string,requiredDate?:string,shippedDate?:string,shipVia?:number,freight?:number,shipName?:string,shipAddress?:string,shipCity?:string,shipRegion?:string,shipPostalCode?:string,shipCountry?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    customerId;
    /** @type {number} */
    employeeId;
    /** @type {string} */
    orderDate;
    /** @type {string} */
    requiredDate;
    /** @type {string} */
    shippedDate;
    /** @type {?number} */
    shipVia;
    /** @type {number} */
    freight;
    /** @type {string} */
    shipName;
    /** @type {string} */
    shipAddress;
    /** @type {string} */
    shipCity;
    /** @type {string} */
    shipRegion;
    /** @type {string} */
    shipPostalCode;
    /** @type {string} */
    shipCountry;
    getTypeName() { return 'CreateOrder' }
    getMethod() { return 'POST' }
    createResponse() { return new IdResponse() }
}
export class CreateOrderDetail {
    /** @param {{id?:string,orderId?:number,productId?:number,unitPrice?:number,quantity?:number,discount?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {number} */
    orderId;
    /** @type {number} */
    productId;
    /** @type {number} */
    unitPrice;
    /** @type {number} */
    quantity;
    /** @type {number} */
    discount;
    getTypeName() { return 'CreateOrderDetail' }
    getMethod() { return 'POST' }
    createResponse() { return new IdResponse() }
}
export class CreateProduct {
    /** @param {{id?:number,productName?:string,supplierId?:number,categoryId?:number,quantityPerUnit?:string,unitPrice?:number,unitsInStock?:number,unitsOnOrder?:number,reorderLevel?:number,discontinued?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    productName;
    /** @type {number} */
    supplierId;
    /** @type {number} */
    categoryId;
    /** @type {string} */
    quantityPerUnit;
    /** @type {number} */
    unitPrice;
    /** @type {number} */
    unitsInStock;
    /** @type {number} */
    unitsOnOrder;
    /** @type {number} */
    reorderLevel;
    /** @type {number} */
    discontinued;
    getTypeName() { return 'CreateProduct' }
    getMethod() { return 'POST' }
    createResponse() { return new IdResponse() }
}
export class CreateShipper {
    /** @param {{id?:number,companyName?:string,phone?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    companyName;
    /** @type {string} */
    phone;
    getTypeName() { return 'CreateShipper' }
    getMethod() { return 'POST' }
    createResponse() { return new IdResponse() }
}
export class CreateSupplier {
    /** @param {{id?:number,companyName?:string,contactName?:string,contactTitle?:string,address?:string,city?:string,region?:string,postalCode?:string,country?:string,phone?:string,fax?:string,homePage?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    companyName;
    /** @type {string} */
    contactName;
    /** @type {string} */
    contactTitle;
    /** @type {string} */
    address;
    /** @type {string} */
    city;
    /** @type {string} */
    region;
    /** @type {string} */
    postalCode;
    /** @type {string} */
    country;
    /** @type {string} */
    phone;
    /** @type {string} */
    fax;
    /** @type {string} */
    homePage;
    getTypeName() { return 'CreateSupplier' }
    getMethod() { return 'POST' }
    createResponse() { return new IdResponse() }
}
export class CreateTerritory {
    /** @param {{id?:string,territoryDescription?:string,regionId?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {string} */
    territoryDescription;
    /** @type {number} */
    regionId;
    getTypeName() { return 'CreateTerritory' }
    getMethod() { return 'POST' }
    createResponse() { return new IdResponse() }
}
export class CreateUserAuthRole {
    /** @param {{userAuthId?:number,role?:string,permission?:string,createdDate?:string,modifiedDate?:string,refId?:number,refIdStr?:string,meta?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    userAuthId;
    /** @type {string} */
    role;
    /** @type {string} */
    permission;
    /** @type {string} */
    createdDate;
    /** @type {string} */
    modifiedDate;
    /** @type {?number} */
    refId;
    /** @type {string} */
    refIdStr;
    /** @type {string} */
    meta;
    getTypeName() { return 'CreateUserAuthRole' }
    getMethod() { return 'POST' }
    createResponse() { return new IdResponse() }
}
export class CreateValidationRule {
    /** @param {{type?:string,field?:string,createdBy?:string,createdDate?:string,modifiedBy?:string,modifiedDate?:string,suspendedBy?:string,suspendedDate?:string,notes?:string,validator?:string,condition?:string,errorCode?:string,message?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    type;
    /** @type {string} */
    field;
    /** @type {string} */
    createdBy;
    /** @type {string} */
    createdDate;
    /** @type {string} */
    modifiedBy;
    /** @type {string} */
    modifiedDate;
    /** @type {string} */
    suspendedBy;
    /** @type {string} */
    suspendedDate;
    /** @type {string} */
    notes;
    /** @type {string} */
    validator;
    /** @type {string} */
    condition;
    /** @type {string} */
    errorCode;
    /** @type {string} */
    message;
    getTypeName() { return 'CreateValidationRule' }
    getMethod() { return 'POST' }
    createResponse() { return new IdResponse() }
}
export class DeleteCategory {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteCategory' }
    getMethod() { return 'DELETE' }
    createResponse() { return new IdResponse() }
}
export class DeleteCustomer {
    /** @param {{id?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    getTypeName() { return 'DeleteCustomer' }
    getMethod() { return 'DELETE' }
    createResponse() { return new IdResponse() }
}
export class DeleteEmployee {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteEmployee' }
    getMethod() { return 'DELETE' }
    createResponse() { return new IdResponse() }
}
export class DeleteEmployeeTerritory {
    /** @param {{id?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    getTypeName() { return 'DeleteEmployeeTerritory' }
    getMethod() { return 'DELETE' }
    createResponse() { return new IdResponse() }
}
export class DeleteOrder {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteOrder' }
    getMethod() { return 'DELETE' }
    createResponse() { return new IdResponse() }
}
export class DeleteOrderDetail {
    /** @param {{id?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    getTypeName() { return 'DeleteOrderDetail' }
    getMethod() { return 'DELETE' }
    createResponse() { return new IdResponse() }
}
export class DeleteProduct {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteProduct' }
    getMethod() { return 'DELETE' }
    createResponse() { return new IdResponse() }
}
export class DeleteShipper {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteShipper' }
    getMethod() { return 'DELETE' }
    createResponse() { return new IdResponse() }
}
export class DeleteSupplier {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteSupplier' }
    getMethod() { return 'DELETE' }
    createResponse() { return new IdResponse() }
}
export class DeleteTerritory {
    /** @param {{id?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    getTypeName() { return 'DeleteTerritory' }
    getMethod() { return 'DELETE' }
    createResponse() { return new IdResponse() }
}
export class DeleteUserAuthRole {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteUserAuthRole' }
    getMethod() { return 'DELETE' }
    createResponse() { return new IdResponse() }
}
export class DeleteValidationRule {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteValidationRule' }
    getMethod() { return 'DELETE' }
    createResponse() { return new IdResponse() }
}
export class PatchCategory {
    /** @param {{id?:number,categoryName?:string,description?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    categoryName;
    /** @type {string} */
    description;
    getTypeName() { return 'PatchCategory' }
    getMethod() { return 'PATCH' }
    createResponse() { return new IdResponse() }
}
export class PatchCustomer {
    /** @param {{id?:string,companyName?:string,contactName?:string,contactTitle?:string,address?:string,city?:string,region?:string,postalCode?:string,country?:string,phone?:string,fax?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {string} */
    companyName;
    /** @type {string} */
    contactName;
    /** @type {string} */
    contactTitle;
    /** @type {string} */
    address;
    /** @type {string} */
    city;
    /** @type {string} */
    region;
    /** @type {string} */
    postalCode;
    /** @type {string} */
    country;
    /** @type {string} */
    phone;
    /** @type {string} */
    fax;
    getTypeName() { return 'PatchCustomer' }
    getMethod() { return 'PATCH' }
    createResponse() { return new IdResponse() }
}
export class PatchEmployee {
    /** @param {{id?:number,lastName?:string,firstName?:string,title?:string,titleOfCourtesy?:string,birthDate?:string,hireDate?:string,address?:string,city?:string,region?:string,postalCode?:string,country?:string,homePhone?:string,extension?:string,photo?:string,notes?:string,reportsTo?:number,photoPath?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    lastName;
    /** @type {string} */
    firstName;
    /** @type {string} */
    title;
    /** @type {string} */
    titleOfCourtesy;
    /** @type {string} */
    birthDate;
    /** @type {string} */
    hireDate;
    /** @type {string} */
    address;
    /** @type {string} */
    city;
    /** @type {string} */
    region;
    /** @type {string} */
    postalCode;
    /** @type {string} */
    country;
    /** @type {string} */
    homePhone;
    /** @type {string} */
    extension;
    /** @type {string} */
    photo;
    /** @type {string} */
    notes;
    /** @type {?number} */
    reportsTo;
    /** @type {string} */
    photoPath;
    getTypeName() { return 'PatchEmployee' }
    getMethod() { return 'PATCH' }
    createResponse() { return new IdResponse() }
}
export class PatchEmployeeTerritory {
    /** @param {{id?:string,employeeId?:number,territoryId?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {number} */
    employeeId;
    /** @type {string} */
    territoryId;
    getTypeName() { return 'PatchEmployeeTerritory' }
    getMethod() { return 'PATCH' }
    createResponse() { return new IdResponse() }
}
export class PatchOrder {
    /** @param {{id?:number,customerId?:string,employeeId?:number,orderDate?:string,requiredDate?:string,shippedDate?:string,shipVia?:number,freight?:number,shipName?:string,shipAddress?:string,shipCity?:string,shipRegion?:string,shipPostalCode?:string,shipCountry?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    customerId;
    /** @type {number} */
    employeeId;
    /** @type {string} */
    orderDate;
    /** @type {string} */
    requiredDate;
    /** @type {string} */
    shippedDate;
    /** @type {?number} */
    shipVia;
    /** @type {number} */
    freight;
    /** @type {string} */
    shipName;
    /** @type {string} */
    shipAddress;
    /** @type {string} */
    shipCity;
    /** @type {string} */
    shipRegion;
    /** @type {string} */
    shipPostalCode;
    /** @type {string} */
    shipCountry;
    getTypeName() { return 'PatchOrder' }
    getMethod() { return 'PATCH' }
    createResponse() { return new IdResponse() }
}
export class PatchOrderDetail {
    /** @param {{id?:string,orderId?:number,productId?:number,unitPrice?:number,quantity?:number,discount?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {number} */
    orderId;
    /** @type {number} */
    productId;
    /** @type {number} */
    unitPrice;
    /** @type {number} */
    quantity;
    /** @type {number} */
    discount;
    getTypeName() { return 'PatchOrderDetail' }
    getMethod() { return 'PATCH' }
    createResponse() { return new IdResponse() }
}
export class PatchProduct {
    /** @param {{id?:number,productName?:string,supplierId?:number,categoryId?:number,quantityPerUnit?:string,unitPrice?:number,unitsInStock?:number,unitsOnOrder?:number,reorderLevel?:number,discontinued?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    productName;
    /** @type {number} */
    supplierId;
    /** @type {number} */
    categoryId;
    /** @type {string} */
    quantityPerUnit;
    /** @type {number} */
    unitPrice;
    /** @type {number} */
    unitsInStock;
    /** @type {number} */
    unitsOnOrder;
    /** @type {number} */
    reorderLevel;
    /** @type {number} */
    discontinued;
    getTypeName() { return 'PatchProduct' }
    getMethod() { return 'PATCH' }
    createResponse() { return new IdResponse() }
}
export class PatchShipper {
    /** @param {{id?:number,companyName?:string,phone?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    companyName;
    /** @type {string} */
    phone;
    getTypeName() { return 'PatchShipper' }
    getMethod() { return 'PATCH' }
    createResponse() { return new IdResponse() }
}
export class PatchSupplier {
    /** @param {{id?:number,companyName?:string,contactName?:string,contactTitle?:string,address?:string,city?:string,region?:string,postalCode?:string,country?:string,phone?:string,fax?:string,homePage?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    companyName;
    /** @type {string} */
    contactName;
    /** @type {string} */
    contactTitle;
    /** @type {string} */
    address;
    /** @type {string} */
    city;
    /** @type {string} */
    region;
    /** @type {string} */
    postalCode;
    /** @type {string} */
    country;
    /** @type {string} */
    phone;
    /** @type {string} */
    fax;
    /** @type {string} */
    homePage;
    getTypeName() { return 'PatchSupplier' }
    getMethod() { return 'PATCH' }
    createResponse() { return new IdResponse() }
}
export class PatchTerritory {
    /** @param {{id?:string,territoryDescription?:string,regionId?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {string} */
    territoryDescription;
    /** @type {number} */
    regionId;
    getTypeName() { return 'PatchTerritory' }
    getMethod() { return 'PATCH' }
    createResponse() { return new IdResponse() }
}
export class PatchUserAuthRole {
    /** @param {{id?:number,userAuthId?:number,role?:string,permission?:string,createdDate?:string,modifiedDate?:string,refId?:number,refIdStr?:string,meta?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    userAuthId;
    /** @type {string} */
    role;
    /** @type {string} */
    permission;
    /** @type {string} */
    createdDate;
    /** @type {string} */
    modifiedDate;
    /** @type {?number} */
    refId;
    /** @type {string} */
    refIdStr;
    /** @type {string} */
    meta;
    getTypeName() { return 'PatchUserAuthRole' }
    getMethod() { return 'PATCH' }
    createResponse() { return new IdResponse() }
}
export class PatchValidationRule {
    /** @param {{id?:number,type?:string,field?:string,createdBy?:string,createdDate?:string,modifiedBy?:string,modifiedDate?:string,suspendedBy?:string,suspendedDate?:string,notes?:string,validator?:string,condition?:string,errorCode?:string,message?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    type;
    /** @type {string} */
    field;
    /** @type {string} */
    createdBy;
    /** @type {string} */
    createdDate;
    /** @type {string} */
    modifiedBy;
    /** @type {string} */
    modifiedDate;
    /** @type {string} */
    suspendedBy;
    /** @type {string} */
    suspendedDate;
    /** @type {string} */
    notes;
    /** @type {string} */
    validator;
    /** @type {string} */
    condition;
    /** @type {string} */
    errorCode;
    /** @type {string} */
    message;
    getTypeName() { return 'PatchValidationRule' }
    getMethod() { return 'PATCH' }
    createResponse() { return new IdResponse() }
}
export class UpdateCustomer {
    /** @param {{id?:string,companyName?:string,contactName?:string,contactTitle?:string,address?:string,city?:string,region?:string,postalCode?:string,country?:string,phone?:string,fax?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {string} */
    companyName;
    /** @type {string} */
    contactName;
    /** @type {string} */
    contactTitle;
    /** @type {string} */
    address;
    /** @type {string} */
    city;
    /** @type {string} */
    region;
    /** @type {string} */
    postalCode;
    /** @type {string} */
    country;
    /** @type {string} */
    phone;
    /** @type {string} */
    fax;
    getTypeName() { return 'UpdateCustomer' }
    getMethod() { return 'PUT' }
    createResponse() { return new IdResponse() }
}
export class UpdateEmployee {
    /** @param {{id?:number,lastName?:string,firstName?:string,title?:string,titleOfCourtesy?:string,birthDate?:string,hireDate?:string,address?:string,city?:string,region?:string,postalCode?:string,country?:string,homePhone?:string,extension?:string,photo?:string,notes?:string,reportsTo?:number,photoPath?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    lastName;
    /** @type {string} */
    firstName;
    /** @type {string} */
    title;
    /** @type {string} */
    titleOfCourtesy;
    /** @type {string} */
    birthDate;
    /** @type {string} */
    hireDate;
    /** @type {string} */
    address;
    /** @type {string} */
    city;
    /** @type {string} */
    region;
    /** @type {string} */
    postalCode;
    /** @type {string} */
    country;
    /** @type {string} */
    homePhone;
    /** @type {string} */
    extension;
    /** @type {string} */
    photo;
    /** @type {string} */
    notes;
    /** @type {?number} */
    reportsTo;
    /** @type {string} */
    photoPath;
    getTypeName() { return 'UpdateEmployee' }
    getMethod() { return 'PUT' }
    createResponse() { return new IdResponse() }
}
export class UpdateEmployeeTerritory {
    /** @param {{id?:string,employeeId?:number,territoryId?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {number} */
    employeeId;
    /** @type {string} */
    territoryId;
    getTypeName() { return 'UpdateEmployeeTerritory' }
    getMethod() { return 'PUT' }
    createResponse() { return new IdResponse() }
}
export class UpdateOrder {
    /** @param {{id?:number,customerId?:string,employeeId?:number,orderDate?:string,requiredDate?:string,shippedDate?:string,shipVia?:number,freight?:number,shipName?:string,shipAddress?:string,shipCity?:string,shipRegion?:string,shipPostalCode?:string,shipCountry?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    customerId;
    /** @type {number} */
    employeeId;
    /** @type {string} */
    orderDate;
    /** @type {string} */
    requiredDate;
    /** @type {string} */
    shippedDate;
    /** @type {?number} */
    shipVia;
    /** @type {number} */
    freight;
    /** @type {string} */
    shipName;
    /** @type {string} */
    shipAddress;
    /** @type {string} */
    shipCity;
    /** @type {string} */
    shipRegion;
    /** @type {string} */
    shipPostalCode;
    /** @type {string} */
    shipCountry;
    getTypeName() { return 'UpdateOrder' }
    getMethod() { return 'PUT' }
    createResponse() { return new IdResponse() }
}
export class UpdateOrderDetail {
    /** @param {{id?:string,orderId?:number,productId?:number,unitPrice?:number,quantity?:number,discount?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {number} */
    orderId;
    /** @type {number} */
    productId;
    /** @type {number} */
    unitPrice;
    /** @type {number} */
    quantity;
    /** @type {number} */
    discount;
    getTypeName() { return 'UpdateOrderDetail' }
    getMethod() { return 'PUT' }
    createResponse() { return new IdResponse() }
}
export class UpdateProduct {
    /** @param {{id?:number,productName?:string,supplierId?:number,categoryId?:number,quantityPerUnit?:string,unitPrice?:number,unitsInStock?:number,unitsOnOrder?:number,reorderLevel?:number,discontinued?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    productName;
    /** @type {number} */
    supplierId;
    /** @type {number} */
    categoryId;
    /** @type {string} */
    quantityPerUnit;
    /** @type {number} */
    unitPrice;
    /** @type {number} */
    unitsInStock;
    /** @type {number} */
    unitsOnOrder;
    /** @type {number} */
    reorderLevel;
    /** @type {number} */
    discontinued;
    getTypeName() { return 'UpdateProduct' }
    getMethod() { return 'PUT' }
    createResponse() { return new IdResponse() }
}
export class UpdateShipper {
    /** @param {{id?:number,companyName?:string,phone?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    companyName;
    /** @type {string} */
    phone;
    getTypeName() { return 'UpdateShipper' }
    getMethod() { return 'PUT' }
    createResponse() { return new IdResponse() }
}
export class UpdateSupplier {
    /** @param {{id?:number,companyName?:string,contactName?:string,contactTitle?:string,address?:string,city?:string,region?:string,postalCode?:string,country?:string,phone?:string,fax?:string,homePage?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    companyName;
    /** @type {string} */
    contactName;
    /** @type {string} */
    contactTitle;
    /** @type {string} */
    address;
    /** @type {string} */
    city;
    /** @type {string} */
    region;
    /** @type {string} */
    postalCode;
    /** @type {string} */
    country;
    /** @type {string} */
    phone;
    /** @type {string} */
    fax;
    /** @type {string} */
    homePage;
    getTypeName() { return 'UpdateSupplier' }
    getMethod() { return 'PUT' }
    createResponse() { return new IdResponse() }
}
export class UpdateTerritory {
    /** @param {{id?:string,territoryDescription?:string,regionId?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    id;
    /** @type {string} */
    territoryDescription;
    /** @type {number} */
    regionId;
    getTypeName() { return 'UpdateTerritory' }
    getMethod() { return 'PUT' }
    createResponse() { return new IdResponse() }
}
export class UpdateUserAuthRole {
    /** @param {{id?:number,userAuthId?:number,role?:string,permission?:string,createdDate?:string,modifiedDate?:string,refId?:number,refIdStr?:string,meta?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    userAuthId;
    /** @type {string} */
    role;
    /** @type {string} */
    permission;
    /** @type {string} */
    createdDate;
    /** @type {string} */
    modifiedDate;
    /** @type {?number} */
    refId;
    /** @type {string} */
    refIdStr;
    /** @type {string} */
    meta;
    getTypeName() { return 'UpdateUserAuthRole' }
    getMethod() { return 'PUT' }
    createResponse() { return new IdResponse() }
}
export class UpdateValidationRule {
    /** @param {{id?:number,type?:string,field?:string,createdBy?:string,createdDate?:string,modifiedBy?:string,modifiedDate?:string,suspendedBy?:string,suspendedDate?:string,notes?:string,validator?:string,condition?:string,errorCode?:string,message?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    type;
    /** @type {string} */
    field;
    /** @type {string} */
    createdBy;
    /** @type {string} */
    createdDate;
    /** @type {string} */
    modifiedBy;
    /** @type {string} */
    modifiedDate;
    /** @type {string} */
    suspendedBy;
    /** @type {string} */
    suspendedDate;
    /** @type {string} */
    notes;
    /** @type {string} */
    validator;
    /** @type {string} */
    condition;
    /** @type {string} */
    errorCode;
    /** @type {string} */
    message;
    getTypeName() { return 'UpdateValidationRule' }
    getMethod() { return 'PUT' }
    createResponse() { return new IdResponse() }
}
export class CreateCategory {
    /** @param {{id?:number,categoryName?:string,description?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    categoryName;
    /** @type {string} */
    description;
    getTypeName() { return 'CreateCategory' }
    getMethod() { return 'POST' }
    createResponse() { return new IdResponse() }
}
export class UpdateCategory {
    /** @param {{id?:number,categoryName?:string,description?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    categoryName;
    /** @type {string} */
    description;
    getTypeName() { return 'UpdateCategory' }
    getMethod() { return 'PUT' }
    createResponse() { return new IdResponse() }
}

