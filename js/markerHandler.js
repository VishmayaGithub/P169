AFRAME.registerComponent("marker-handler",{
    init : async function(){
        this.el.addEventListener("markerFound",()=>{
            this.handleMarkerFound()
            //console.log("marker found")
            
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("marker poof")
            this.handleMarkerLost()
        })

    },
    handleMarkerFound : function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"

        var obutton = document.getElementById("order-button")
        var sbutton = document.getElementById("order-summary-button")

        obutton.addEventListener("click",()=>{
            swal({
                title : "Thanks for ordering!!",
                text:"Your toy will be delivered soon!",
                icon : "https://pngimage.net/wp-content/uploads/2018/06/mano-pulgar-arriba-png-3.png",
                timer : "2000",
                buttons : false
            })
        })
        sbutton.addEventListener("click",()=>{
            swal({
                title : "Order Summary",
                text:"Sorry! Work in progress :(",
                icon : "warning",
                
            })
        })
    },
    handleMarkerLost : function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    },
})