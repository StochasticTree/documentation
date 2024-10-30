_C_l_a_s_s _t_h_a_t _w_r_a_p_s _a _C++ _r_a_n_d_o_m _n_u_m_b_e_r _g_e_n_e_r_a_t_o_r (_f_o_r _r_e_p_r_o_d_u_c_i_b_i_l_i_t_y)

_D_e_s_c_r_i_p_t_i_o_n:

     Persists a C++ random number generator throughout an R session to
     ensure reproducibility from a given random seed. If no seed is
     provided, the C++ random number generator is initialized using
     ‘std::random_device’.

_P_u_b_l_i_c _f_i_e_l_d_s:

     ‘rng_ptr’ External pointer to a C++ std::mt19937 class

_M_e_t_h_o_d_s:

  _P_u_b_l_i_c _m_e_t_h_o_d_s:

         • ‘CppRNG$new()’

  _M_e_t_h_o_d '_n_e_w()':

       Create a new CppRNG object.

    _U_s_a_g_e:

         CppRNG$new(random_seed = -1)
         

    _A_r_g_u_m_e_n_t_s:

         ‘random_seed’ (Optional) random seed for sampling


    _R_e_t_u_r_n_s:

         A new ‘CppRNG’ object.


