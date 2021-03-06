import { ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { UploadOutput, UploaderOptions, NgUploaderService } from '../../../';
import { Subscription } from 'rxjs/Subscription';
export declare class NgFileSelectDirective implements OnInit, OnDestroy {
    elementRef: ElementRef;
    options: UploaderOptions;
    uploadInput: EventEmitter<any>;
    uploadOutput: EventEmitter<UploadOutput>;
    filesList: EventEmitter<any>;
    upload: NgUploaderService;
    el: HTMLInputElement;
    _sub: Subscription[];
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    fileListener: () => void;
}
