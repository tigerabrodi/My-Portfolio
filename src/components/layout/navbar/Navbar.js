import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    const [active,
        setActive] = useState(false);

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <nav class="navbar is-fixed-top is-spaced is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <Link exact to="/">
                    <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQERUTExMWFhIXFhcWGRgYFRYYHhgXFxgXFhgaFxUYHSggGBolGxcXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQFy0dHyUtLS0tKy0tLS0rLS0tLS0rLS0tLS0rLS0tLS0tKy0rLS0tKy0tLS0tKy0tLS03LS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYCAwQHAQj/xABEEAABAwIDBQUFBAoBAQkAAAABAAIDBBESITEFQVFhcQYTIoGRMkJSobEHI2LBFDNygpKistHh8CRDFTRTY3OzwtLx/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAHxEBAQEBAAMAAgMAAAAAAAAAAAERAgMhMRJBBDJR/9oADAMBAAIRAxEAPwD3FERAREQEWOMcR6r6Cg+rh2rsmKqbhlBIF7WcWkX4EFdheBqQtElfG3ffogps3Z2vo/FS1BmjGfdSk3twa/X1XTsftV3h7uVro5dDHKLE8bE5O8lOzbUJ9keq4qh/eizwHDmAUVwNoRA8uhH3Ljd0Y9x3Fo+HiF3L4xgAsNFjLK1gJcQAN5NkGmoqSCGNGJ53bgOLjuH1XBVwEkNce8kIuGnJjR8TmjUbs73WUte1rw9t7OsCHMc0OG4tc4AX5b1uqYwWuc3PvCwHk24BHLU+pQa6SKBtryMe8cXNyP4W6N8lJtIOllpl7pjfFga3TOwHzUe6ppAcnNaeLbt+mRQS6KLjrP8Aw5o5B8JcAf4h+YXTFXtJwuux/B2/9lwyd5IOqIYTduWVhbcFEbT2J+lPHfSO7kZ923LEfxu3qYRBlRSNgYGQxtYwbgPqd66RtV3ALhkeG5kgDmsXPAF7i3G6CSG1zvb81xbV7Vx00Zkks1o3k7+AG88lVNp9q23MdMx1RNpZgJaDzdv8l2bD7Cvne2o2k7G8ZshHsM6jeUEn2R2zWV8hnczuqQCzAR4pPxcgresY2BoAAsBkANyyRBERAREQEREBERBT9r9mp45HTUkl8Ru6F5OEnix3un5KMpe0LcfdSl8M3wSXbf8AZdo4dCvQ1xbT2TBUtwzRteOYHyKLqCbJfffzWQUdW9hZY86KqfH/AOXJ42eV8ws6TZ1Ywf8AIli5d2Di8ycgg7JZ2s1PlqT0AzK+RF7jcjC3hqT13DosoKdrdBnxOZ9VuVGiqqBGLnMnJrRq47gP9yXK4NaQ+dwxe63cOTR7x5rnbM6WUlliRdoJ0Y3QutvcToOAUhTUTWHEfE/4nZn/AB5KDTUV3h/VPc02FiGi992FxB+SypwYy1hzLrnCNGNbrbjm4DzWda0gteBfATcciLEjmPpcb18qxcMkbnhOLL3mkEOHob9QEHUYwTcgXGV1lZYxShwDgbgrNUaZaVj/AGmNPUArlm2TGQQLtHAG4/hOSkEQRVLTTwuAxiSLSzsnN5g6OHJSawmnay2I2vlfdfruWag+EKNrti08gs9vhvmA4tB8gbKTWMjA4WIBHMXQbtlGmp24Yog0crXPmttb2mp4Wl0jgwD4iAoabZkbtxH7JLfoVq2Z2PoTJika6R+o7xxcB0ug3bN7avrpCyjp3OYNZZAWs8t5VwjvYXte2dtL8ljBA2Noaxoa0bgLLYiCIiAiIgIiICIiAiL4TZBorajA2+/coIuJNyttdUd47kNFouiswueplPsN9stOe5uWRPms2TtLS4Hw557stT0XNSPwsdK/Iuu88m6tHk35koN1BTNiYGNzwgAk6k21PNc21K1zDhbqGPeejW2HzIPkuunGFl3a+07qcz6aeSg55MQqX7xHh9bn8wgsbNFpMJaSWb9WnQ9DuKypX4mNPELcgji7CSWeF29jsgeh3HmMl009W15t7LvhOR/yOYXOKkSTvhIBDWMdnxcXg/0hJ9lsOjnN6HToHXA8kEgi0UkTmNs55eeJAvbhlr1W66o+PYCLEXCj3uNPxMPqY/7s+nRSJWpkrX3tnYlp6jUKDMG6+qOpn9y/uifAfEzkN7fL811CqF7HI/7vVG0rFYzyFouATyHD81y/9qQ2/WNHIkAjqDogm6PaRGT8xxUrHKHZg3Xn1Z2qo4vanZfgDc+gXLSdrJJ3WooJZT8RGBg6l39lDHpyKE7OR11i6rdHn7LGA+Hq4nNTaIIiICIiAiIgKM2tV2GAHM6rTt7tBDStIfI1ruZGXkqi3bktQ61NA+Un3yCxnXEdfJFxOSShoJcQANSVyNJqM8xD6F/9m/Va4ey8hImrZcZB8MLMowd1/iPVSLnhtutkHNtAeFsY0c4N/d1PyFvNfNpyWwM+N7Qeg8R+llnJnM0cGud5kgKN2pUWka7c2Rg9ThP9SpEptGTCzrkq7Rzd5DUc34fINt+S6+0202sjNjcgOyGee4ZaZqB2ZWMia+NxLfZcMQIuMOG99NQUak9LX2fqcUbQdcIPqBdSypXZitJjb8TT8jmPkVbxMCzEOCJYr1HV22g4fFGPk53/ANgpnbMmGB55fmFT6iQtqg/hhB6PDh/UG+isHaOoDqKS5tduHLW9xkOaFiYpJcTAVFVu0Syqazd3eLrnZRPZ7aszm2wtFjhdiJ1G+w5WPmuXtJ34n7wBrjHG12VxcEvuPRRc9ryx4IBGhXCDgqCN0jb/ALzcj8iPRcOwtrB9muBaTm2+h6HQrbtx5a+Fw1DyPVpP5Kpjbt5n3eP4CHfu6O/lJPkuF0txY7tFM4hKw8CCCOosQq5Su8IB1HhPVuR+iRY76esc3mF0jZ1HO7HLAyQ6XIz87KBr69kIBebAm2hPPcsNnbdicfu5Gk8L6+SUsXuh7LULPEynjz/Df6qYhgawWa0NHAAD6KA2DtUE4b+E/IqxqMCIiAiIgIiIC+EL6iCBh7H0TZDL3IdITe7yXZ+anGMDRYAAchZZIgiNtSZtCrtXPd4A3Eeqle0NUGuJ4C3mqbQ7QEkkgBuGOAJ52uQrGpFgdNaV5+GNvzJ/sqt2ia6QNja4jGTe3AZnP/dVIyVd5n/iYD/Cf7FRcFbH+lEyODWAGxJsLMIxZ9TbyKl9RqRI7SkbLBBkGhzmBwyAbhcC8eWEhaNs1MJkYWuDg5royBmMgXN5fEPMKA2ztn9KkdBSHxd4wseNMT8nWOm/6qC27SbTpQTK+Uw4gMTiHAuBuLC5LcxkeSn02Rc9l0TIYI6hnsua0SWOQFhZ1uIOR5HkrBBUloI3Ef6VS+xm3YajDA4d1NYgW9mUcHDQm3HNWWSE0xDTnCTZrvhO5ruXA+Ss/wAp9ctRSiSowH/qR+hY45/zj0WyN/3cneZvaC0/hLc8hzte/AhbZ/DJDJua+x6OGH6kei+9rCyFvfHR1o3gD2gcgbD3hf0S/VcO1KlsMgmju5rgBIGgkDncZXC3t2rH3rcRxNkiIBFjoQRvz1OipG1KGtqKV0/fB1PES3A1xbZrbAEtGRyIOfFVaOpybG8kxh1wAc23yOE/kk5uM3qPXNiysEpgNnMvdoPAnNtjmLE+VxwUt2mDmxxBpJIlBGI3uA1xtfpldeYuqp6J0UpcZofCWPObg34SdSLHJem7blD3QWzHif5YbD+pIfXzZm0hf5OadR5LCvYI5MQ/VyHXg/gev1UTtePxxFrgxxcW4ibe6SATvFxoVsp9pPwujnjxN9l2HPzsMxxBCuriY2bUNjma5wBbexuAcjlvVh2v2MoatucTWu1D2eEi++4VBNexgzkD49z7i45SN1B56K9dkdttkaInO8QHhN/aHC6lTpStqbJrdku7xpdUUo1PvsHPiF6R2a2uysp2SxuuCLefNSb2gggi4ORC4tlbJhpQ5sLAxrnl5A0xEAGw3aIzruRERBERAREQEREBYTShjS4mwAuVmoftJsuSrjETZO7jJ+8I9ot4N4XQUKuqZtp1LoaXQHxye7GOu9/JTO0tixUMMUUY0BJO9x3kq27F2RDRxCKFga0epPEneVUftA2iGSNGrgLBo1LnaAI1L7VDau0hHUN4NY8u+rfoV8lpPC24DnNjxkWviN7vFvxXcPNWWbsjgoS6XOeRzXvPAXBwjlbJRReBO1vGM/IhVqVh2UoGUprGsbc2E0WV7sLbtt0cPoqVtztXU1FIyCQAsuDj3vw6X5716rsOJvdROtmxpjv+EHDY/wAIVL2r2eMTpGxME8JcTgaRjjJzsWnMjgQr48t9s9S/pS+zVI91RERkDK1gPAneOi93bHdmF9nXFnZZHjkqF2Z2U79IjdJH3bGXLI8i4uIsHOaPZaMzc77L0Bsgvhvna9uSnkzfS8fEJW7HcGkR5sI9knNv7Lj9CtkNEakxOlFu6xXYRrJawPS1z+8ppBksa1Xhc7KhkdQxjnCMyESRjfYnXePJc+xaIESOeLMw2ueP5r1Db+w45JnSRSGGQ2xh0bnMefiBGV/Nc1B2YY54dNIZrG4YxhazL4i7I9Lr0c98Sb+3G83WluxO+pKCMjVrHyfsMGIX63A81hQVTjG92ghY+Jl+DC4g9LYfRXpwGtuXlwVNqW/8Rwbq5hA/acLD5lcZ9dZGzaADnxA/iPyt+aybB3UjBa2Jj/RpaRbl4ivmy2d/LG73WxBx/etl8l11M4kmc4ewwYAed7uty0Hkp+2mdNBG6aLvGNe3GAQ4A6+H81IbX7ESwnvKF9iDfunHL9x3uqMprSSRAHIvZYjqNF6irXPpBdlNp1E7HNqad8MrLAkjJ/Np3qdREZEREBERAREQEREBERAVU2b2VLqt9ZUkOkxHumA3axoyB5uIVrRBEdqjalkd8IvlmTbgN5VU2f2cc2mdUyttO8AhvwM3N67yvQXAHVa6qLGxzeIIRZVE2A+8NuDnj+dx+hC7ZaZj/aa09QCqy6tfSyuswuZljA43wgtHHlvVlgqWv013g5EdQcws10ZwwNZk1ob0ACjqbZz2zSPLiWlwIN91vZ5AG/8AEpRa5pXNtZhcN9iLjyJF/VBvRanSOw3DbngSB89Egc83xgDgAb+psEGxfEuuWurmQtJcbeaBtCqEbCSc9yp0dV/x4iAXDGwWFrkNffK9ho1aqrbkVS/xysEQ3Fw8XID4fqudlUMTWNzDZJHZb7+yB/GrIOjs+97hJY4WYyw/FZpOVwbDXcpKGQSsDYt5MYHO+H6rmoIRAyRl7lr3Ani7U/MqxdmuzZgrQz3GtEx5PcMx/FcqpajuxezzFWCmJJ7iRwud7WtxNPzC9TUJQ7C7utmqbi0jWgDeD7xPWwU2jFoiIiCIiAiIgIiICIiAiIgIiICIiCnu2IJaqpYcmuETwbcHXNln22oQAyVt2uGRc3I+fHzVswi97Z8VHdoqN09O+NvtG1vUIsvt57T7dkjaHStxM+K2FwHEsOThzHopvZ204qhuKN4cOR06jcvP/txlayWnhjPsR2cAeGQuAvPdjbYmppA+J5abi/AjmN6v4bNa/J+jbrF8gaLk2AVSo+00rmg/cvy1Di31Hi+qjtrbejGc8wP4Acv4Rr53XNvFkrNvXuIW4j8Ryb6715p9oW0JLsa55JddxAyFtALf34LOv7cAZQx35uyHoP8ACqm06ySpfjkIva2QsAOnmunHF1jqzPTgD16n9jexX1EokdnDGQ8nmPZb6i/kF5eWAcyvW/sX7U924UL2tDZMRa4ZHFbQ8VvqemIsHZqh/Sa2Q2+7bPJI7nheQ0eZF/JemBgve2Z3rh2JsiOkjwMzubucdXE7ypBc1tEREQREQEREBERAREQEREBERAREQEREHLtKubBGZH3sNwzJJyAA43VG7X9vpYKdxjp3Nc4YQ8uaQ0neQM1Ze1NSyzI8Qxk4sO8gC17eao/a2LFBh+LL1y/NWMddZXjFbM+R5e8lzibkk3JuuORo3Ky9rtjCjnwA+BwxN5C+nkoCRt13nuLK0se4aE+RWWEnUrDC4LNsJOpUxWbSBos3Bduy9kyTm0TC62ttB1OgU1SdlJHODCRjOjW5+ZO4K7IlqsMhAVq7Kdm6iWWOQNcxjXNcXm7cgb2bvz0vzXoewuytPTMHgDpN73C5J5X0HRdtVtJjCWsGJw1A0HU7uixet+OfXkx1xbSrIbWmEjG+7I0XI4d4LWPOyutFUCWNrwCA4A2O668sqJZpAcUmEcGAD+Y3PpZWXsFth9zSyuuWi8TjqWjVp4kLF5sPH5Z1c1dURFl2EREBERAREQEREBERAREQEREBa6mdsbHPcbNaCT0C2KC7ZyEUrgPeIB6Xv+SJbk1RK+tMlS2oOV5ACODHeADoLg+SktsU+NjeUkZPQOF1DRkSsPA4m+hLfyU5subvYhizcPC7qMifPXzXSx4/H3et15v9qTf+Qz/0/wD5FUfMc1f/ALVY7TxHjGf6iqJZdOfj1c/GuxKmOz3Z+SslwNvYZuduaP78lt7N7BkrJMLRZosXO3NH9+S9f2dshtND3cIDTxO873HiVOqnXWImKjbTsFLTN8Wrj9XOP+8FL0FBHTMLiRiOb3nLT6NHBfHSR0rbe1I7O3vPPE8B8gomvnc4Y5TkLEM90Z6/iKxJrh13OXVU7RfLlHdkfxaOd+z8I56rkDmsLWAa3PQDeV0BclN4nOfzwjo3X539FuTHl67vX10lYRzmKRkrfaY4OH5jzFwsyuKsaR4m5kajiOXNKc3Lr2ClqBIxr2+y4AjzW1VL7OdpCWnLMQJjcQBvDTmARqLK2rg+pLs0RERRERAREQEREBERAREQEREBVn7QZsFIXcDf0BKsyoP2n1V4zFwY4nzFgrPrHkuc1XtnxYYmNOoaAets12bOm7ua3uyZfvgZeov6c1qYvk0eIW0ORB4EG4PkQF2s2Pm89Z1qD+1eC7YX83N9QCPoVRdjbLfUytiYMyfQbyeS9F7YVMdRQm5AlY4Ow3zu04XWHDCSR5LPsdRxUUAkeR3sovYZutuaAPmpOsmPfOs5WTY2y46WJsbBYDU8TvJWmr2tclsNnHQv90dD7x6LjqqiSbI+CP4Qcz+078gjWgCwFgpOd+vN35v8YMjsSSbuOpOp/wAclxbdP3D+hUiVFdoj9y4DU5Lbzy7W9lT9yHjXDe3O2nqt1PHhaG8B681X6OttGG7i5lv4mqxgqLZgVrcsytMzrAngqiLqZe7njdESybG3xNNsr6O4jqvco72F9bC/Vfn+JrnyYx7rg70N7L3rZ9SJYmSDRzQ71C49fXv/AI99Y6ERFl6BERAREQEREBERAREQEREBeWduJscsvUM+YavTaupbEwveQGgaleSV0pklHNxeeg0+dvRb4+vP/IvqR0tWS+BZLq+ei44/FLcHEQbWIHiv4S65F22txGRW6ghaHyOaBYuABHIAG34cV12PjDtQD1CyAtopOfeuvXl3nH1EXxacQqL26PAOqkZZA0EnQLnrI+8YRxGSlainPJZkNPd5HUDpdXKmmD2NcNCAR5qqzM1BHJTmwv1DRwxDyDiAsx06+JElclffAQNTl6my6SVrcVpiOeKEMbYL0H7O6oupnMP/AE3lo6HxD6qgvKtX2bz/AHkzOLWuHkSD9QufXx6f49zpfURFze0REQEREBERAREQEREBERBXu3EbXU3iNrOBA4lebQ1DQ9znEDxBg8rE/M/JXTt/V+Jkd8gC4/70Va7O7KAY98gxd4XEAjRjiSBY7yD9Fvm5Hk8s/LvGYKyBXPCMJcy98Bw34iwIvzsQtwK6x5OplxndFjdLoyyuvhK1SSWtqSdANT0C66bZjni8psPhaf6nfkPmpesb54vTllAIIOhFlE7LqrXicc2HCOY3fKylKmnMD8NyY3eyTuO9pO/iFXdtsLJMY3gX8vzTf2v45cr5tYWkPkVI7FP3Ledz5OJcPkVBz1PeWO+1lzxVj4CMJJYT7PA8hwU1r8dmLgXLBxXLR1jZW3B68luLlWMfHlTfYF9q0DjG8fQ/koB5WzY1Y+GqhewXOMAji13hPyN/JZ6+OviudR7UiIuT6AiIgIiICIiAiIgIiICIo3b+12UkJkec9Gje5x0ACDzztBIamse3VpdY/sN3eeQ81IVlQIo3OtoMhxOgHmbBROw7vfJKdXOsOgzPzJHks9uTi7GX1OLrh0+Z+S28tuS1zUrC1oubu1ceLjmT6rddag5ZArq8d9tl0usLr5dEbqCTDOCdHtw9CLkW65jyCnrqrz5jLUZjqMwp6jqRIxrhvAK59fXp8V2Yx2nT95GWj2tWng4ZhVbaEPeMv7w//CFbyVA7TiwPuB4X/J3+frfinNXyc7NUeoaW3cPMHQ/2K0ufo52Q4czxU3t2mFgRqXAW47/yXIKB591VmX000tWGG7SOfNSke1mHU2PVcbdkcbDyXRFs1jd11UuOwTB2hupzsRQ99VtNvCzxH8lXrADLJemfZvs/u4DKR4pD/KNFnqt+LnelvREXN7RERAREQEREBERAREQF5x9qX66n6PX1FZ9Y8n9ai+zv6r9+T/3HqP7S/r4uh+oRFqfXC/1bgs0RdXjfV8REGL12dmv1H7z/AOty+os9u3h/aUKjdufqneX1C+IubvVfqPbZ5rcURdHlaysCiIsaJF7R2W/7pD+wERY6enwfalURFh6RERAREQf/2Q=="
                        alt="Logo"
                        />
                </Link>

                <Link
                    onClick={handleClick}
                    role="button"
                    className={active
                    ? "navbar-burger burger is-active"
                    : "navbar-burger burger"}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>

            <div
                onClick={handleClick}
                className={active
                ? "navbar-menu is-active"
                : "navbar-menu"}>
                <div class="navbar-center">
                    <Link exact to="/"
                        class="navbar-item button is-outlined is-normal is-primary">Home</Link>
                    <Link exact to="/about"
                        class="navbar-item button is-outlined is-normal is-primary">About</Link>

                    <Link exact to="/projects"
                        class="navbar-item button is-outlined is-normal is-primary">Projects</Link>
                    <Link exact to="/contact"
                        class="navbar-item button is-outlined is-normal is-primary">Contact</Link>
                </div>
            </div>
        </nav>

    )

}

export default Navbar;