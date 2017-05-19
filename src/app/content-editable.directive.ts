import { Directive, HostListener, Input, ElementRef, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Directive( {
    selector: '[ceModel]'
} )
export class ContentEditableDirective implements OnInit, OnChanges {

    @Input( 'ceDefault' ) ceDefault: string;
    @Input( 'ceModel' ) ceModel: string;
    @Output( 'ceChange' ) ceChange = new EventEmitter();

    constructor( private elRef: ElementRef ) { }
    
    @HostListener( 'keyup', [ '$event' ] )
    onChange( $event: any ) {
        const value = this.elRef.nativeElement.innerText;
        if ( value === '' ) {
            this.elRef.nativeElement.innerText = this.ceDefault;
            this.setPlaceholderColor( true );
        }
    }

    @HostListener( 'click', [ '$event' ] )
    onFocus( $event: any ) {
        const value = this.elRef.nativeElement.innerText;
        if ( value === this.ceDefault ) {
            this.setPlaceholderColor( true );
        }
    }

    @HostListener( 'blur', [ '$event' ] )
    onFocusOut( $event: any ) {
        let value = this.elRef.nativeElement.innerText;
        value = value.replace( /(\r\n|\n|\r)/gm, '' );
        if ( value === '' ) {
            this.elRef.nativeElement.innerText = this.ceDefault;
        }
        this.ceModel = value;
        this.ceChange.emit( value );
    }    

    setPlaceholderColor( isDefault: boolean ) {
        if ( this.elRef.nativeElement.hasAttribute( 'placeholder' ) ) {
            this.elRef.nativeElement.style.color = ( isDefault ) ? '#898e8c' : '#000';
        }
    }

    ngOnInit() {
        if ( this.ceModel !== '' ) {
            this.elRef.nativeElement.innerText = this.ceModel;
            this.setPlaceholderColor( false );
        }
        else {
            this.elRef.nativeElement.innerText = this.ceDefault;
            this.setPlaceholderColor( true );
        }
        
    }

    ngOnChanges( changes: SimpleChanges ) {
        const cv = changes[ 'ceModel' ].currentValue;
        if ( this.elRef.nativeElement.innerText !== cv ) {
            this.elRef.nativeElement.innerText = cv;
            if ( cv === '' ) {
                this.elRef.nativeElement.innerText = this.ceDefault;
            }
        }
    }

}
