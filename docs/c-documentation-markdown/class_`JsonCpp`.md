---
title: class `JsonCpp`
---

# class `JsonCpp`

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`JsonCpp`](#classJsonCpp_1a6752360f1c4ee58bf2ce97c74c913358)`()` | 
`public inline  `[`~JsonCpp`](#classJsonCpp_1a9a2addd32da5664837830db3d55a6cd8)`()` | 
`public inline void `[`LoadFile`](#classJsonCpp_1ab74bad931397c3c8fea780c1d592f54a)`(std::string filename)` | 
`public inline void `[`SaveFile`](#classJsonCpp_1adaca7db574f603f43f514541ec93c466)`(std::string filename)` | 
`public inline void `[`LoadFromString`](#classJsonCpp_1ad47ae83c8a7c0eaa8c545d7b7e13d06d)`(std::string & json_string)` | 
`public inline std::string `[`DumpJson`](#classJsonCpp_1a6a7d2af034373a6a04d290410ad8d324)`()` | 
`public inline std::string `[`AddForest`](#classJsonCpp_1a2d3e0410f56f10a4bfc4b4371b5fca80)`(`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_samples)` | 
`public inline void `[`AddDouble`](#classJsonCpp_1a1333ac93e1734bf36880302aed0d3c3e)`(std::string field_name,double field_value)` | 
`public inline void `[`AddDoubleSubfolder`](#classJsonCpp_1ae01fb3ea5ec4488a3bd123f32b2f80e9)`(std::string subfolder_name,std::string field_name,double field_value)` | 
`public inline void `[`AddBool`](#classJsonCpp_1a4450825f6ea4d51542ae09a37dafc474)`(std::string field_name,bool field_value)` | 
`public inline void `[`AddBoolSubfolder`](#classJsonCpp_1a7ec65310666c485b57ca81442674fe52)`(std::string subfolder_name,std::string field_name,bool field_value)` | 
`public inline void `[`AddString`](#classJsonCpp_1a0ffef39433c6218865dabda8195bcc5a)`(std::string field_name,std::string field_value)` | 
`public inline void `[`AddStringSubfolder`](#classJsonCpp_1a96d2033a5c73a82a35a13f45f0f5bdc1)`(std::string subfolder_name,std::string field_name,std::string field_value)` | 
`public inline void `[`AddDoubleVector`](#classJsonCpp_1a9ccf9ffc1405fe11d92742db1decbe41)`(std::string field_name,py::array_t< double > field_vector)` | 
`public inline void `[`AddDoubleVectorSubfolder`](#classJsonCpp_1acfba76184cdb603e53d7f88611d4bc90)`(std::string subfolder_name,std::string field_name,py::array_t< double > field_vector)` | 
`public inline void `[`AddStringVector`](#classJsonCpp_1a8f43c0c42f81d018c4467e2453a0a3bc)`(std::string field_name,std::vector< std::string > & field_vector)` | 
`public inline void `[`AddStringVectorSubfolder`](#classJsonCpp_1adef46c168faa1580336dc4bf359448ed)`(std::string subfolder_name,std::string field_name,std::vector< std::string > & field_vector)` | 
`public inline bool `[`ContainsField`](#classJsonCpp_1a098c6e90264117e48d6aff6f651ce64c)`(std::string field_name)` | 
`public inline bool `[`ContainsFieldSubfolder`](#classJsonCpp_1a388825667d9b67428757b3660e4c4fbe)`(std::string subfolder_name,std::string field_name)` | 
`public inline double `[`ExtractDouble`](#classJsonCpp_1a52e4cbe7868575dff061a92703872046)`(std::string field_name)` | 
`public inline double `[`ExtractDoubleSubfolder`](#classJsonCpp_1a49eb6123e3d647effd3aeaf230597369)`(std::string subfolder_name,std::string field_name)` | 
`public inline bool `[`ExtractBool`](#classJsonCpp_1a009fa243b45e44532970da15459c2fce)`(std::string field_name)` | 
`public inline bool `[`ExtractBoolSubfolder`](#classJsonCpp_1ae040b066fc7c7ae34cc4147b9a60175e)`(std::string subfolder_name,std::string field_name)` | 
`public inline std::string `[`ExtractString`](#classJsonCpp_1ab0b6b218f814bfa9b34e93d5b868386a)`(std::string field_name)` | 
`public inline std::string `[`ExtractStringSubfolder`](#classJsonCpp_1a8654f6e9a42841a88a6309584306ebd2)`(std::string subfolder_name,std::string field_name)` | 
`public inline py::array_t< double > `[`ExtractDoubleVector`](#classJsonCpp_1ac71eff7e2832e3f70bd992de3817085c)`(std::string field_name)` | 
`public inline py::array_t< double > `[`ExtractDoubleVectorSubfolder`](#classJsonCpp_1a2c6861d2c23e2b3c6a5ac3c1ca20f6b6)`(std::string subfolder_name,std::string field_name)` | 
`public inline std::vector< std::string > `[`ExtractStringVector`](#classJsonCpp_1a15339f9324472de7cc20ac8150e54e62)`(std::string field_name)` | 
`public inline std::vector< std::string > `[`ExtractStringVectorSubfolder`](#classJsonCpp_1a42b03d1192062d6b89c37a3380e43a97)`(std::string subfolder_name,std::string field_name)` | 
`public inline nlohmann::json `[`SubsetJsonForest`](#classJsonCpp_1a104498c45cc52bebae67b35e73d2c8d1)`(std::string forest_label)` | 

## Members

#### `public inline  `[`JsonCpp`](#classJsonCpp_1a6752360f1c4ee58bf2ce97c74c913358)`()` 

#### `public inline  `[`~JsonCpp`](#classJsonCpp_1a9a2addd32da5664837830db3d55a6cd8)`()` 

#### `public inline void `[`LoadFile`](#classJsonCpp_1ab74bad931397c3c8fea780c1d592f54a)`(std::string filename)` 

#### `public inline void `[`SaveFile`](#classJsonCpp_1adaca7db574f603f43f514541ec93c466)`(std::string filename)` 

#### `public inline void `[`LoadFromString`](#classJsonCpp_1ad47ae83c8a7c0eaa8c545d7b7e13d06d)`(std::string & json_string)` 

#### `public inline std::string `[`DumpJson`](#classJsonCpp_1a6a7d2af034373a6a04d290410ad8d324)`()` 

#### `public inline std::string `[`AddForest`](#classJsonCpp_1a2d3e0410f56f10a4bfc4b4371b5fca80)`(`[`ForestContainerCpp`](#classForestContainerCpp)` & forest_samples)` 

#### `public inline void `[`AddDouble`](#classJsonCpp_1a1333ac93e1734bf36880302aed0d3c3e)`(std::string field_name,double field_value)` 

#### `public inline void `[`AddDoubleSubfolder`](#classJsonCpp_1ae01fb3ea5ec4488a3bd123f32b2f80e9)`(std::string subfolder_name,std::string field_name,double field_value)` 

#### `public inline void `[`AddBool`](#classJsonCpp_1a4450825f6ea4d51542ae09a37dafc474)`(std::string field_name,bool field_value)` 

#### `public inline void `[`AddBoolSubfolder`](#classJsonCpp_1a7ec65310666c485b57ca81442674fe52)`(std::string subfolder_name,std::string field_name,bool field_value)` 

#### `public inline void `[`AddString`](#classJsonCpp_1a0ffef39433c6218865dabda8195bcc5a)`(std::string field_name,std::string field_value)` 

#### `public inline void `[`AddStringSubfolder`](#classJsonCpp_1a96d2033a5c73a82a35a13f45f0f5bdc1)`(std::string subfolder_name,std::string field_name,std::string field_value)` 

#### `public inline void `[`AddDoubleVector`](#classJsonCpp_1a9ccf9ffc1405fe11d92742db1decbe41)`(std::string field_name,py::array_t< double > field_vector)` 

#### `public inline void `[`AddDoubleVectorSubfolder`](#classJsonCpp_1acfba76184cdb603e53d7f88611d4bc90)`(std::string subfolder_name,std::string field_name,py::array_t< double > field_vector)` 

#### `public inline void `[`AddStringVector`](#classJsonCpp_1a8f43c0c42f81d018c4467e2453a0a3bc)`(std::string field_name,std::vector< std::string > & field_vector)` 

#### `public inline void `[`AddStringVectorSubfolder`](#classJsonCpp_1adef46c168faa1580336dc4bf359448ed)`(std::string subfolder_name,std::string field_name,std::vector< std::string > & field_vector)` 

#### `public inline bool `[`ContainsField`](#classJsonCpp_1a098c6e90264117e48d6aff6f651ce64c)`(std::string field_name)` 

#### `public inline bool `[`ContainsFieldSubfolder`](#classJsonCpp_1a388825667d9b67428757b3660e4c4fbe)`(std::string subfolder_name,std::string field_name)` 

#### `public inline double `[`ExtractDouble`](#classJsonCpp_1a52e4cbe7868575dff061a92703872046)`(std::string field_name)` 

#### `public inline double `[`ExtractDoubleSubfolder`](#classJsonCpp_1a49eb6123e3d647effd3aeaf230597369)`(std::string subfolder_name,std::string field_name)` 

#### `public inline bool `[`ExtractBool`](#classJsonCpp_1a009fa243b45e44532970da15459c2fce)`(std::string field_name)` 

#### `public inline bool `[`ExtractBoolSubfolder`](#classJsonCpp_1ae040b066fc7c7ae34cc4147b9a60175e)`(std::string subfolder_name,std::string field_name)` 

#### `public inline std::string `[`ExtractString`](#classJsonCpp_1ab0b6b218f814bfa9b34e93d5b868386a)`(std::string field_name)` 

#### `public inline std::string `[`ExtractStringSubfolder`](#classJsonCpp_1a8654f6e9a42841a88a6309584306ebd2)`(std::string subfolder_name,std::string field_name)` 

#### `public inline py::array_t< double > `[`ExtractDoubleVector`](#classJsonCpp_1ac71eff7e2832e3f70bd992de3817085c)`(std::string field_name)` 

#### `public inline py::array_t< double > `[`ExtractDoubleVectorSubfolder`](#classJsonCpp_1a2c6861d2c23e2b3c6a5ac3c1ca20f6b6)`(std::string subfolder_name,std::string field_name)` 

#### `public inline std::vector< std::string > `[`ExtractStringVector`](#classJsonCpp_1a15339f9324472de7cc20ac8150e54e62)`(std::string field_name)` 

#### `public inline std::vector< std::string > `[`ExtractStringVectorSubfolder`](#classJsonCpp_1a42b03d1192062d6b89c37a3380e43a97)`(std::string subfolder_name,std::string field_name)` 

#### `public inline nlohmann::json `[`SubsetJsonForest`](#classJsonCpp_1a104498c45cc52bebae67b35e73d2c8d1)`(std::string forest_label)` 

