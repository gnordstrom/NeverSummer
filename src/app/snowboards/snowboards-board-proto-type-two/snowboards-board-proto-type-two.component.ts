import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-snowboards-board-proto-type-two',
  templateUrl: './snowboards-board-proto-type-two.component.html',
  styleUrls: ['./snowboards-board-proto-type-two.component.scss']
})
export class SnowboardsBoardProtoTypeTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    // Your jQuery code goes here
    function Shortcodes() {

  //Progress bar animations	
		$('.progress-bar li').each(function(i){		
			$(this).appear(function(){			
				var percent = $(this).find('span').attr('data-width');
				var $endNum = parseInt($(this).find('span strong i').text());
				var $that = $(this);			
				$(this).find('span').animate({
					'width' : percent + '%'
				},1600, function(){
				});			
				$(this).find('span strong').animate({
					'opacity' : 1
				},1400);			
				$(this).find('span strong i').countTo({
					from: 0,
					to: $endNum,
					speed: 1200,
					refreshInterval: 30,
					onComplete: function(){}
				});	 
				if(percent == '100'){
					$that.find('span strong').addClass('full');
				}	
			});
		});	

    // Radial Counters
  if( jQuery('.radial-counter').length > 0 ){		
			$(".knob").knob({
				width: 190,
				height: 190,
				fgColor: '#009ddd',
				bgColor: '#fff',
				inputColor: '#fff',
				dynamicDraw: true,
				thickness: 0.66,
				tickColorizeValues: true,
				skin:'tron',
				readOnly:true,
			});	
			$(".knob").appear(function(e){			
				var $this = $(this);
				var myVal = $this.attr("data-gal");	
			   $({value: 0}).animate({value: myVal}, {
				   duration: 2000,
				   easing: 'swing',
				   step: function () {
					   $this.val(Math.ceil(this.value)).trigger('change');
				   }
			   })			
			});	
		}
}

  }

}
