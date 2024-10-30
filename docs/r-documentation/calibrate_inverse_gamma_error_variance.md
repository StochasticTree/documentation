_C_a_l_i_b_r_a_t_e _t_h_e _s_c_a_l_e _p_a_r_a_m_e_t_e_r _o_n _a_n _i_n_v_e_r_s_e _g_a_m_m_a _p_r_i_o_r _f_o_r _t_h_e _g_l_o_b_a_l
_e_r_r_o_r _v_a_r_i_a_n_c_e _a_s _i_n _C_h_i_p_m_a_n _e_t _a_l (_2_0_2_2) _1

_D_e_s_c_r_i_p_t_i_o_n:

     1 Chipman, H., George, E., Hahn, R., McCulloch, R., Pratola, M.
     and Sparapani, R. (2022). Bayesian Additive Regression Trees,
     Computational Approaches. In Wiley StatsRef: Statistics Reference
     Online (eds N. Balakrishnan, T. Colton, B. Everitt, W. Piegorsch,
     F. Ruggeri and J.L. Teugels).
     https://doi.org/10.1002/9781118445112.stat08288

_U_s_a_g_e:

     calibrate_inverse_gamma_error_variance(
       y,
       X,
       W = NULL,
       nu = 3,
       quant = 0.9,
       standardize = TRUE
     )
     
_A_r_g_u_m_e_n_t_s:

       y: Outcome to be modeled using BART, BCF or another
          nonparametric ensemble method.

       X: Covariates to be used to partition trees in an ensemble or
          series of ensemble.

       W: Optional Basis used to define a "leaf regression" model for
          each decision tree. The "classic" BART model assumes a
          constant leaf parameter, which is equivalent to a "leaf
          regression" on a basis of all ones, though it is not
          necessary to pass a vector of ones, here or to the BART
          function. Default: ‘NULL’.

      nu: The shape parameter for the global error variance's IG prior.
          The scale parameter in the Sparapani et al (2021)
          parameterization is defined as ‘nu*lambda’ where ‘lambda’ is
          the output of this function. Default: ‘3’.

   quant: Optional Quantile of the inverse gamma prior distribution
          represented by a linear-regression-based overestimate of
          ‘sigma^2’. Default: ‘0.9’.

standardize: Optional Whether or not outcome should be standardized
          (‘(y-mean(y))/sd(y)’) before calibration of ‘lambda’.
          Default: ‘TRUE’.

_V_a_l_u_e:

     Value of ‘lambda’ which determines the scale parameter of the
     global error variance prior (‘sigma^2 ~ IG(nu,nu*lambda)’)

_E_x_a_m_p_l_e_s:

     n <- 100
     p <- 5
     X <- matrix(runif(n*p), ncol = p)
     y <- 10*X[,1] - 20*X[,2] + rnorm(n)
     nu <- 3
     lambda <- calibrate_inverse_gamma_error_variance(y, X, nu = nu)
     sigma2hat <- mean(resid(lm(y~X))^2)
     mean(var(y)/rgamma(100000, nu, rate = nu*lambda) < sigma2hat)
     
