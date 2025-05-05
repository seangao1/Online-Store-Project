import { create } from "zustand";

export const useProductStore = create(

    (set) => ({

        products: [],

        setProducts: (products) => set({ products }),

        createProduct: async (newProduct) => {

            if (!newProduct.name || !newProduct.price || !newProduct.image) {

                return { success: false, message: "Please fill in all fields." };
            }

            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            });

            const data = await res.json();
            set((state) => ({ products: [...state.products, data.data] }));
            return { success: true, message: "New product created successfully." };

        },


        fetchProducts: async () => {
            const res = await fetch('/api/products');

            const data = await res.json();

            set({ products: data.data });
        },


        deleteProduct: async (pid) => {
            const res = await fetch(`/api/products/${pid}`, { method: "DELETE" });

            const data = await res.json();

            if (!data.success) return { success: false, message: data.message };


            // update the UI immediately after successful deletion. 
            // Without this line, user must refresh after deletion to see the updated interface.
            set((state) => ({ products: state.products.filter(product => product._id != pid) }));

            return { success: true, message: data.message };


        },


        updateProduct: async (pid, updatedProduct) => {
            const res = await fetch(`/api/products/${pid}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedProduct)
            });

            const data = await res.json();

            if(!data.success) return {success: false, message: data.message};

            //update the UI immeidately without needing a refresh:
            set((state) => ({
                products: state.products.map(product=> product._id === pid ? data.data : product) 
                // if product id === pid passsed to this function, then map it to data.data,
                // else just map to product
            }));

            return {success: true, message: data.message}

        }

    })

);