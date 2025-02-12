# Development Roadmap

We are working hard to make `stochtree` faster, easier to use, and more flexible! Below is a snapshot of our development roadmap. Our four categories of product enhancement are

1. **User Interface**: the way that a user can build, store, and use models
2. **Performance**: program runtime and memory usage of various models
3. **Modeling Features**: scope of modeling tools provided
4. **Interoperability**: compatibility with other computing and data libraries

These development goals are prioritized along three broad timelines

1. **Now**: development is currently underway or planned for a near-term release
2. **Next**: design / research needed; development hinges on feasibility and time demands
3. **Later**: long-term goal; exploratory

| Category | Now | Next | Later |
| --- | --- | --- | --- | 
| User Interface | Feature parity between R and Python | |  |
| Performance |  |  | Hardware acceleration (Apple Silicon GPU)<br>Hardware acceleration (NVIDIA GPU)<br>Out-of-memory sampler |
| Modeling Features | Quantile cutpoint sampling | Monotone BART sampler<br>Multiclass classification | |
| Interoperability | | Polars (Python) | PyMC (Python)<br>Stan (R / Python)<br>Apache Arrow (R / Python) |
