import { motion, AnimatePresence } from "framer-motion"

function Layout({ children }) {



    return (
        <AnimatePresence>

            <div className="relative min-h-screen bg-black bg-dot-white/[0.2]">
                {/* Pseudo-element to add the radial gradient */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-black" style={{ maskImage: 'radial-gradient(ellipse at center, transparent 20%, black)' }}></div>
                </div>

                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {children}
                    </motion.div>
                </div>
            </div>

        </AnimatePresence>
    )
}


// Si llamamos alguna función de redux el export se tiene que hacer así 
export default Layout