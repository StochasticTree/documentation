_C_l_a_s_s _t_h_a_t _s_t_o_r_e_s _d_r_a_w_s _f_r_o_m _a_n _r_a_n_d_o_m _e_n_s_e_m_b_l_e _o_f _d_e_c_i_s_i_o_n _t_r_e_e_s

_D_e_s_c_r_i_p_t_i_o_n:

     Wrapper around a C++ container of tree ensembles

_P_u_b_l_i_c _f_i_e_l_d_s:

     ‘json_ptr’ External pointer to a C++ nlohmann::json object

     ‘num_forests’ Number of forests in the nlohmann::json object

     ‘forest_labels’ Names of forest objects in the overall
          nlohmann::json object

     ‘num_rfx’ Number of random effects terms in the nlohman::json
          object

     ‘rfx_container_labels’ Names of rfx container objects in the
          overall nlohmann::json object

     ‘rfx_mapper_labels’ Names of rfx label mapper objects in the
          overall nlohmann::json object

     ‘rfx_groupid_labels’ Names of rfx group id objects in the overall
          nlohmann::json object

_M_e_t_h_o_d_s:

  _P_u_b_l_i_c _m_e_t_h_o_d_s:

         • ‘CppJson$new()’

         • ‘CppJson$add_forest()’

         • ‘CppJson$add_random_effects()’

         • ‘CppJson$add_scalar()’

         • ‘CppJson$add_boolean()’

         • ‘CppJson$add_string()’

         • ‘CppJson$add_vector()’

         • ‘CppJson$add_string_vector()’

         • ‘CppJson$add_list()’

         • ‘CppJson$add_string_list()’

         • ‘CppJson$get_scalar()’

         • ‘CppJson$get_boolean()’

         • ‘CppJson$get_string()’

         • ‘CppJson$get_vector()’

         • ‘CppJson$get_string_vector()’

         • ‘CppJson$get_numeric_list()’

         • ‘CppJson$get_string_list()’

         • ‘CppJson$return_json_string()’

         • ‘CppJson$save_file()’

         • ‘CppJson$load_from_file()’

         • ‘CppJson$load_from_string()’

  _M_e_t_h_o_d '_n_e_w()':

       Create a new CppJson object.

    _U_s_a_g_e:

         CppJson$new()
         

    _R_e_t_u_r_n_s:

         A new ‘CppJson’ object.


  _M_e_t_h_o_d '_a_d_d__f_o_r_e_s_t()':

       Convert a forest container to json and add to the current
       ‘CppJson’ object

    _U_s_a_g_e:

         CppJson$add_forest(forest_samples)
         

    _A_r_g_u_m_e_n_t_s:

         ‘forest_samples’ ‘ForestSamples’ R class


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_a_d_d__r_a_n_d_o_m__e_f_f_e_c_t_s()':

       Convert a random effects container to json and add to the
       current ‘CppJson’ object

    _U_s_a_g_e:

         CppJson$add_random_effects(rfx_samples)
         

    _A_r_g_u_m_e_n_t_s:

         ‘rfx_samples’ ‘RandomEffectSamples’ R class


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_a_d_d__s_c_a_l_a_r()':

       Add a scalar to the json object under the name "field_name"
       (with optional subfolder "subfolder_name")

    _U_s_a_g_e:

         CppJson$add_scalar(field_name, field_value, subfolder_name = NULL)
         

    _A_r_g_u_m_e_n_t_s:

         ‘field_name’ The name of the field to be added to json

         ‘field_value’ Numeric value of the field to be added to json

         ‘subfolder_name’ (Optional) Name of the subfolder / hierarchy
             under which to place the value


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_a_d_d__b_o_o_l_e_a_n()':

       Add a boolean value to the json object under the name
       "field_name" (with optional subfolder "subfolder_name")

    _U_s_a_g_e:

         CppJson$add_boolean(field_name, field_value, subfolder_name = NULL)
         

    _A_r_g_u_m_e_n_t_s:

         ‘field_name’ The name of the field to be added to json

         ‘field_value’ Numeric value of the field to be added to json

         ‘subfolder_name’ (Optional) Name of the subfolder / hierarchy
             under which to place the value


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_a_d_d__s_t_r_i_n_g()':

       Add a string value to the json object under the name
       "field_name" (with optional subfolder "subfolder_name")

    _U_s_a_g_e:

         CppJson$add_string(field_name, field_value, subfolder_name = NULL)
         

    _A_r_g_u_m_e_n_t_s:

         ‘field_name’ The name of the field to be added to json

         ‘field_value’ Numeric value of the field to be added to json

         ‘subfolder_name’ (Optional) Name of the subfolder / hierarchy
             under which to place the value


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_a_d_d__v_e_c_t_o_r()':

       Add an array to the json object under the name "field_name"
       (with optional subfolder "subfolder_name")

    _U_s_a_g_e:

         CppJson$add_vector(field_name, field_vector, subfolder_name = NULL)
         

    _A_r_g_u_m_e_n_t_s:

         ‘field_name’ The name of the field to be added to json

         ‘field_vector’ Vector to be stored in json

         ‘subfolder_name’ (Optional) Name of the subfolder / hierarchy
             under which to place the value


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_a_d_d__s_t_r_i_n_g__v_e_c_t_o_r()':

       Add an array to the json object under the name "field_name"
       (with optional subfolder "subfolder_name")

    _U_s_a_g_e:

         CppJson$add_string_vector(field_name, field_vector, subfolder_name = NULL)
         

    _A_r_g_u_m_e_n_t_s:

         ‘field_name’ The name of the field to be added to json

         ‘field_vector’ Character vector to be stored in json

         ‘subfolder_name’ (Optional) Name of the subfolder / hierarchy
             under which to place the value


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_a_d_d__l_i_s_t()':

       Add a list of vectors (as an object map of arrays) to the json
       object under the name "field_name"

    _U_s_a_g_e:

         CppJson$add_list(field_name, field_list)
         

    _A_r_g_u_m_e_n_t_s:

         ‘field_name’ The name of the field to be added to json

         ‘field_list’ List to be stored in json


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_a_d_d__s_t_r_i_n_g__l_i_s_t()':

       Add a list of vectors (as an object map of arrays) to the json
       object under the name "field_name"

    _U_s_a_g_e:

         CppJson$add_string_list(field_name, field_list)
         

    _A_r_g_u_m_e_n_t_s:

         ‘field_name’ The name of the field to be added to json

         ‘field_list’ List to be stored in json


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_g_e_t__s_c_a_l_a_r()':

       Retrieve a scalar value from the json object under the name
       "field_name" (with optional subfolder "subfolder_name")

    _U_s_a_g_e:

         CppJson$get_scalar(field_name, subfolder_name = NULL)
         

    _A_r_g_u_m_e_n_t_s:

         ‘field_name’ The name of the field to be accessed from json

         ‘subfolder_name’ (Optional) Name of the subfolder / hierarchy
             under which the field is stored


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_g_e_t__b_o_o_l_e_a_n()':

       Retrieve a boolean value from the json object under the name
       "field_name" (with optional subfolder "subfolder_name")

    _U_s_a_g_e:

         CppJson$get_boolean(field_name, subfolder_name = NULL)
         

    _A_r_g_u_m_e_n_t_s:

         ‘field_name’ The name of the field to be accessed from json

         ‘subfolder_name’ (Optional) Name of the subfolder / hierarchy
             under which the field is stored


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_g_e_t__s_t_r_i_n_g()':

       Retrieve a string value from the json object under the name
       "field_name" (with optional subfolder "subfolder_name")

    _U_s_a_g_e:

         CppJson$get_string(field_name, subfolder_name = NULL)
         

    _A_r_g_u_m_e_n_t_s:

         ‘field_name’ The name of the field to be accessed from json

         ‘subfolder_name’ (Optional) Name of the subfolder / hierarchy
             under which the field is stored


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_g_e_t__v_e_c_t_o_r()':

       Retrieve a vector from the json object under the name
       "field_name" (with optional subfolder "subfolder_name")

    _U_s_a_g_e:

         CppJson$get_vector(field_name, subfolder_name = NULL)
         

    _A_r_g_u_m_e_n_t_s:

         ‘field_name’ The name of the field to be accessed from json

         ‘subfolder_name’ (Optional) Name of the subfolder / hierarchy
             under which the field is stored


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_g_e_t__s_t_r_i_n_g__v_e_c_t_o_r()':

       Retrieve a character vector from the json object under the name
       "field_name" (with optional subfolder "subfolder_name")

    _U_s_a_g_e:

         CppJson$get_string_vector(field_name, subfolder_name = NULL)
         

    _A_r_g_u_m_e_n_t_s:

         ‘field_name’ The name of the field to be accessed from json

         ‘subfolder_name’ (Optional) Name of the subfolder / hierarchy
             under which the field is stored


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_g_e_t__n_u_m_e_r_i_c__l_i_s_t()':

       Reconstruct a list of numeric vectors from the json object
       stored under "field_name"

    _U_s_a_g_e:

         CppJson$get_numeric_list(field_name, key_names)
         

    _A_r_g_u_m_e_n_t_s:

         ‘field_name’ The name of the field to be added to json

         ‘key_names’ Vector of names of list elements (each of which is
             a vector)


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_g_e_t__s_t_r_i_n_g__l_i_s_t()':

       Reconstruct a list of string vectors from the json object stored
       under "field_name"

    _U_s_a_g_e:

         CppJson$get_string_list(field_name, key_names)
         

    _A_r_g_u_m_e_n_t_s:

         ‘field_name’ The name of the field to be added to json

         ‘key_names’ Vector of names of list elements (each of which is
             a vector)


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_r_e_t_u_r_n__j_s_o_n__s_t_r_i_n_g()':

       Convert a JSON object to in-memory string

    _U_s_a_g_e:

         CppJson$return_json_string()
         

    _R_e_t_u_r_n_s:

         JSON string


  _M_e_t_h_o_d '_s_a_v_e__f_i_l_e()':

       Save a json object to file

    _U_s_a_g_e:

         CppJson$save_file(filename)
         

    _A_r_g_u_m_e_n_t_s:

         ‘filename’ String of filepath, must end in ".json"


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_l_o_a_d__f_r_o_m__f_i_l_e()':

       Load a json object from file

    _U_s_a_g_e:

         CppJson$load_from_file(filename)
         

    _A_r_g_u_m_e_n_t_s:

         ‘filename’ String of filepath, must end in ".json"


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_l_o_a_d__f_r_o_m__s_t_r_i_n_g()':

       Load a json object from string

    _U_s_a_g_e:

         CppJson$load_from_string(json_string)
         

    _A_r_g_u_m_e_n_t_s:

         ‘json_string’ JSON string dump


    _R_e_t_u_r_n_s:

         NULL


