# StochTree

`stochtree` runs stochastic machine learning algorithms for supervised learning and causal inference.
For details on installing the package, see the [Installation](install.md) page. Once you have `stochtree` installed,
the [Supervised Learning](supervised.md) and [Causal Inference](causal.md) vignettes provide some guidance on
using the package for your use case.

<!-- We also support a lower-level interface to the underlying C++ data structures which can allow for custom sampling routines -->
<!-- (i.e. interspersing a BART forest with a neural network, a complicated variance sampler, etc...). This interface is introduced -->
<!-- in the :doc:`Prototype <prototype>` vignette. -->

For complete function / class documentation, see the [API](api.md) page.

* [Installation](install.md)
  * [Quick start](install.md#quick-start)
  * [Virtual environment installation](install.md#virtual-environment-installation)
    * [Conda](install.md#conda)
    * [Venv](install.md#venv)
  * [Cloning the Repository](install.md#cloning-the-repository)
* [Supervised Learning](supervised.md)
* [Causal Inference](causal.md)
* [StochTree API](api.md)
  * [BART](api.md#bart)
    * [`BARTModel`](api.md#stochtree.bart.BARTModel)
      * [`BARTModel.predict()`](api.md#stochtree.bart.BARTModel.predict)
      * [`BARTModel.sample()`](api.md#stochtree.bart.BARTModel.sample)
  * [BCF](api.md#bcf)
    * [`BCFModel`](api.md#stochtree.bcf.BCFModel)
      * [`BCFModel.predict()`](api.md#stochtree.bcf.BCFModel.predict)
      * [`BCFModel.predict_tau()`](api.md#stochtree.bcf.BCFModel.predict_tau)
      * [`BCFModel.sample()`](api.md#stochtree.bcf.BCFModel.sample)
