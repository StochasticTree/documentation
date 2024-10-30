_C_l_a_s_s _t_h_a_t _w_r_a_p_s _t_h_e "_p_e_r_s_i_s_t_e_n_t" _a_s_p_e_c_t_s _o_f _a _C++ _r_a_n_d_o_m _e_f_f_e_c_t_s _m_o_d_e_l
(_d_r_a_w_s _o_f _t_h_e _p_a_r_a_m_e_t_e_r_s _a_n_d _a _m_a_p _f_r_o_m _t_h_e _o_r_i_g_i_n_a_l _l_a_b_e_l _i_n_d_i_c_e_s _t_o
_t_h_e _0-_i_n_d_e_x_e_d _l_a_b_e_l _n_u_m_b_e_r_s _u_s_e_d _t_o _p_l_a_c_e _g_r_o_u_p _s_a_m_p_l_e_s _i_n _m_e_m_o_r_y (_i._e.
_t_h_e _f_i_r_s_t _l_a_b_e_l _i_s _s_t_o_r_e_d _i_n _c_o_l_u_m_n _0 _o_f _t_h_e _s_a_m_p_l_e _m_a_t_r_i_x, _t_h_e _s_e_c_o_n_d
_l_a_b_e_l _i_s _s_t_o_r_e _i_n _c_o_l_u_m_n _1 _o_f _t_h_e _s_a_m_p_l_e _m_a_t_r_i_x, _e_t_c...))

_D_e_s_c_r_i_p_t_i_o_n:

     Coordinates various C++ random effects classes and persists those
     needed for prediction / serialization

_P_u_b_l_i_c _f_i_e_l_d_s:

     ‘rfx_container_ptr’ External pointer to a C++
          StochTree::RandomEffectsContainer class

     ‘label_mapper_ptr’ External pointer to a C++
          StochTree::LabelMapper class

     ‘training_group_ids’ Unique vector of group IDs that were in the
          training dataset

_M_e_t_h_o_d_s:

  _P_u_b_l_i_c _m_e_t_h_o_d_s:

         • ‘RandomEffectSamples$new()’

         • ‘RandomEffectSamples$load_in_session()’

         • ‘RandomEffectSamples$load_from_json()’

         • ‘RandomEffectSamples$append_from_json()’

         • ‘RandomEffectSamples$load_from_json_string()’

         • ‘RandomEffectSamples$append_from_json_string()’

         • ‘RandomEffectSamples$predict()’

         • ‘RandomEffectSamples$extract_parameter_samples()’

         • ‘RandomEffectSamples$extract_label_mapping()’

  _M_e_t_h_o_d '_n_e_w()':

       Create a new RandomEffectSamples object.

    _U_s_a_g_e:

         RandomEffectSamples$new()
         

    _R_e_t_u_r_n_s:

         A new ‘RandomEffectSamples’ object.


  _M_e_t_h_o_d '_l_o_a_d__i_n__s_e_s_s_i_o_n()':

       Construct RandomEffectSamples object from other "in-session" R
       objects

    _U_s_a_g_e:

         RandomEffectSamples$load_in_session(
           num_components,
           num_groups,
           random_effects_tracker
         )
         

    _A_r_g_u_m_e_n_t_s:

         ‘num_components’ Number of "components" or bases defining the
             random effects regression

         ‘num_groups’ Number of random effects groups

         ‘random_effects_tracker’ Object of type ‘RandomEffectsTracker’


    _R_e_t_u_r_n_s:

         NULL


  _M_e_t_h_o_d '_l_o_a_d__f_r_o_m__j_s_o_n()':

       Construct RandomEffectSamples object from a json object

    _U_s_a_g_e:

         RandomEffectSamples$load_from_json(
           json_object,
           json_rfx_container_label,
           json_rfx_mapper_label,
           json_rfx_groupids_label
         )
         

    _A_r_g_u_m_e_n_t_s:

         ‘json_object’ Object of class ‘CppJson’

         ‘json_rfx_container_label’ Label referring to a particular rfx
             sample container (i.e. "random_effect_container_0") in the
             overall json hierarchy

         ‘json_rfx_mapper_label’ Label referring to a particular rfx
             label mapper (i.e. "random_effect_label_mapper_0") in the
             overall json hierarchy

         ‘json_rfx_groupids_label’ Label referring to a particular set
             of rfx group IDs (i.e. "random_effect_groupids_0") in the
             overall json hierarchy


    _R_e_t_u_r_n_s:

         A new ‘RandomEffectSamples’ object.


  _M_e_t_h_o_d '_a_p_p_e_n_d__f_r_o_m__j_s_o_n()':

       Append random effect draws to ‘RandomEffectSamples’ object from
       a json object

    _U_s_a_g_e:

         RandomEffectSamples$append_from_json(
           json_object,
           json_rfx_container_label,
           json_rfx_mapper_label,
           json_rfx_groupids_label
         )
         

    _A_r_g_u_m_e_n_t_s:

         ‘json_object’ Object of class ‘CppJson’

         ‘json_rfx_container_label’ Label referring to a particular rfx
             sample container (i.e. "random_effect_container_0") in the
             overall json hierarchy

         ‘json_rfx_mapper_label’ Label referring to a particular rfx
             label mapper (i.e. "random_effect_label_mapper_0") in the
             overall json hierarchy

         ‘json_rfx_groupids_label’ Label referring to a particular set
             of rfx group IDs (i.e. "random_effect_groupids_0") in the
             overall json hierarchy


    _R_e_t_u_r_n_s:

         NULL (updates object in-place)


  _M_e_t_h_o_d '_l_o_a_d__f_r_o_m__j_s_o_n__s_t_r_i_n_g()':

       Construct RandomEffectSamples object from a json object

    _U_s_a_g_e:

         RandomEffectSamples$load_from_json_string(
           json_string,
           json_rfx_container_label,
           json_rfx_mapper_label,
           json_rfx_groupids_label
         )
         

    _A_r_g_u_m_e_n_t_s:

         ‘json_string’ JSON string which parses into object of class
             ‘CppJson’

         ‘json_rfx_container_label’ Label referring to a particular rfx
             sample container (i.e. "random_effect_container_0") in the
             overall json hierarchy

         ‘json_rfx_mapper_label’ Label referring to a particular rfx
             label mapper (i.e. "random_effect_label_mapper_0") in the
             overall json hierarchy

         ‘json_rfx_groupids_label’ Label referring to a particular set
             of rfx group IDs (i.e. "random_effect_groupids_0") in the
             overall json hierarchy


    _R_e_t_u_r_n_s:

         A new ‘RandomEffectSamples’ object.


  _M_e_t_h_o_d '_a_p_p_e_n_d__f_r_o_m__j_s_o_n__s_t_r_i_n_g()':

       Append random effect draws to ‘RandomEffectSamples’ object from
       a json object

    _U_s_a_g_e:

         RandomEffectSamples$append_from_json_string(
           json_string,
           json_rfx_container_label,
           json_rfx_mapper_label,
           json_rfx_groupids_label
         )
         

    _A_r_g_u_m_e_n_t_s:

         ‘json_string’ JSON string which parses into object of class
             ‘CppJson’

         ‘json_rfx_container_label’ Label referring to a particular rfx
             sample container (i.e. "random_effect_container_0") in the
             overall json hierarchy

         ‘json_rfx_mapper_label’ Label referring to a particular rfx
             label mapper (i.e. "random_effect_label_mapper_0") in the
             overall json hierarchy

         ‘json_rfx_groupids_label’ Label referring to a particular set
             of rfx group IDs (i.e. "random_effect_groupids_0") in the
             overall json hierarchy


    _R_e_t_u_r_n_s:

         NULL (updates object in-place)


  _M_e_t_h_o_d '_p_r_e_d_i_c_t()':

       Predict random effects for each observation implied by
       ‘rfx_group_ids’ and ‘rfx_basis’. If a random effects model is
       "intercept-only" the ‘rfx_basis’ will be a vector of ones of
       size ‘length(rfx_group_ids)’.

    _U_s_a_g_e:

         RandomEffectSamples$predict(rfx_group_ids, rfx_basis = NULL)
         

    _A_r_g_u_m_e_n_t_s:

         ‘rfx_group_ids’ Indices of random effects groups in a
             prediction set

         ‘rfx_basis’ (Optional ) Basis used for random effects
             prediction


    _R_e_t_u_r_n_s:

         Matrix with as many rows as observations provided and as many
         columns as samples drawn of the model.


  _M_e_t_h_o_d '_e_x_t_r_a_c_t__p_a_r_a_m_e_t_e_r__s_a_m_p_l_e_s()':

       Extract the random effects parameters sampled. With the
       "redundant parameterization" of Gelman et al (2008), this
       includes four parameters: alpha (the "working parameter" shared
       across every group), xi (the "group parameter" sampled
       separately for each group), beta (the product of alpha and xi,
       which corresponds to the overall group-level random effects),
       and sigma (group-independent prior variance for each component
       of xi).

    _U_s_a_g_e:

         RandomEffectSamples$extract_parameter_samples()
         

    _R_e_t_u_r_n_s:

         List of arrays. The alpha array has dimension
         (‘num_components’, ‘num_samples’) and is simply a vector if
         ‘num_components = 1’. The xi and beta arrays have dimension
         (‘num_components’, ‘num_groups’, ‘num_samples’) and is simply
         a matrix if ‘num_components = 1’. The sigma array has
         dimension (‘num_components’, ‘num_samples’) and is simply a
         vector if ‘num_components = 1’.


  _M_e_t_h_o_d '_e_x_t_r_a_c_t__l_a_b_e_l__m_a_p_p_i_n_g()':

       Convert the mapping of group IDs to random effect components
       indices from C++ to R native format

    _U_s_a_g_e:

         RandomEffectSamples$extract_label_mapping()
         

    _R_e_t_u_r_n_s:

         List mapping group ID to random effect components.


